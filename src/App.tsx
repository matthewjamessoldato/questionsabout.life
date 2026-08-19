import { useState, useEffect, useRef, useCallback, useMemo, useSyncExternalStore, Fragment } from 'react';
import { Download, ChevronRight, ChevronLeft, Share2, Eye, EyeOff, Search, X, Info as InfoIcon, Timer, Star } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { questions, categories } from './data/questions';
import type { Question } from './data/questions';

import bg1 from './assets/backgrounds/bg-1.jpg';
import bg2 from './assets/backgrounds/bg-2.jpg';
import bg3 from './assets/backgrounds/bg-3.jpg';
import bg4 from './assets/backgrounds/bg-4.jpg';
import bg5 from './assets/backgrounds/bg-5.jpg';
import bg6 from './assets/backgrounds/bg-6.jpg';
import bg7 from './assets/backgrounds/bg-7.jpg';
import bg8 from './assets/backgrounds/bg-8.jpg';
import bg9 from './assets/backgrounds/bg-9.jpg';
import bg10 from './assets/backgrounds/bg-10.jpg';
import bg11 from './assets/backgrounds/bg-11.jpg';
import bg12 from './assets/backgrounds/bg-12.jpg';
import bg13 from './assets/backgrounds/bg-13.jpg';
import bg14 from './assets/backgrounds/bg-14.jpg';
import bg15 from './assets/backgrounds/bg-15.jpg';
import bg16 from './assets/backgrounds/bg-16.jpg';
import bg17 from './assets/backgrounds/bg-17.jpg';
import './index.css';

type Mode = 'random' | 'categories';

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16, bg17];

const MOBILE_QUERY = '(max-width: 767px)';
const STORE_KEY = 'qal.state.v1';
const SAVED = 'Saved';

type Persisted = { answered: number[]; favorites: number[]; category: string };

/** A lesson doesn't fit in one page view. Progress has to survive a reload. */
function loadState(): Persisted {
  const empty: Persisted = { answered: [], favorites: [], category: 'All' };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return {
      answered: Array.isArray(parsed.answered) ? parsed.answered.filter(n => typeof n === 'number') : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites.filter(n => typeof n === 'number') : [],
      category: typeof parsed.category === 'string' ? parsed.category : 'All',
    };
  } catch {
    return empty; // private mode, quota, corrupt JSON — never block the app
  }
}

function saveState(state: Persisted) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    /* storage is a convenience, not a requirement */
  }
}
const SWIPE_DISTANCE = 55;   // px of horizontal travel before a swipe counts
const SWIPE_RATIO = 1.4;     // horizontal must beat vertical by this much (so vertical scrolling wins)

/** Question length buckets drive a CSS clamp() instead of a hard-coded px size,
 *  so the headline scales with the viewport instead of overflowing on phones. */
function questionSize(text: string): 'xl' | 'lg' | 'md' | 'sm' {
  if (text.length > 200) return 'sm';
  if (text.length > 100) return 'md';
  if (text.length > 60) return 'lg';
  return 'xl';
}

/** Short, non-blocking haptic tick on devices that support it. */
function tick(pattern: number | number[] = 8) {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    /* vibration is a nicety, never a failure */
  }
}

function useMediaQuery(query: string) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', onStoreChange);
    return () => mql.removeEventListener('change', onStoreChange);
  }, [query]);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

function App() {
  const [mode, setMode] = useState<Mode>('random');
  const [showCopyright, setShowCopyright] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reduceMotion = useReducedMotion();

  const shareRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [persisted] = useState(loadState);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(persisted.category);
  const [answeredIds, setAnsweredIds] = useState<Set<number>>(() => new Set(persisted.answered));
  const [favorites, setFavorites] = useState<Set<number>>(() => new Set(persisted.favorites));

  // History State
  const [history, setHistory] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [expandedVocab, setExpandedVocab] = useState<number | null>(null);
  const [focusedVocabIndex, setFocusedVocabIndex] = useState<number | null>(null);
  const [showAllMeanings, setShowAllMeanings] = useState(false);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Timer State
  const [isTimerMenuOpen, setIsTimerMenuOpen] = useState(false);
  const [timerDuration, setTimerDuration] = useState<number | null>(null); // in seconds
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [isSharing, setIsSharing] = useState(false);
  const [isBuildingPDF, setIsBuildingPDF] = useState(false);

  useEffect(() => {
    saveState({
      answered: [...answeredIds],
      favorites: [...favorites],
      category: selectedCategory,
    });
  }, [answeredIds, favorites, selectedCategory]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current); }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerActive && timeLeft !== null && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev! - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  // Buzz once when the timer runs out — the visual cue alone is easy to miss on a phone.
  useEffect(() => {
    if (timeLeft === 0 && timerDuration) tick([90, 60, 90]);
  }, [timeLeft, timerDuration]);

  const startTimer = (minutes: number) => {
    const seconds = minutes * 60;
    setTimerDuration(seconds);
    setTimeLeft(seconds);
    setIsTimerActive(true);
    setIsTimerMenuOpen(false);
    tick();
  };

  const cancelTimer = () => {
    setIsTimerActive(false);
    setTimerDuration(null);
    setTimeLeft(null);
    setIsTimerMenuOpen(false);
  };

  const toggleTimer = () => setIsTimerActive(prev => !prev);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Close the timer dropdown on any outside tap.
  useEffect(() => {
    if (!isTimerMenuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.timer-dropdown-container')) setIsTimerMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isTimerMenuOpen]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'All') return questions;
    if (selectedCategory === SAVED) return questions.filter(q => favorites.has(q.id));
    return questions.filter(q => q.category === selectedCategory);
  }, [selectedCategory, favorites]);

  /* Seen/total per category, so picking a category in a lesson is an informed choice. */
  const categoryProgress = useMemo(() => {
    const map = new Map<string, { seen: number; total: number }>();
    for (const q of questions) {
      const entry = map.get(q.category) ?? { seen: 0, total: 0 };
      entry.total += 1;
      if (answeredIds.has(q.id)) entry.seen += 1;
      map.set(q.category, entry);
    }
    return map;
  }, [answeredIds]);

  const seenCount = answeredIds.size;

  const toggleFavorite = useCallback(() => {
    if (!currentQuestion) return;
    tick(12);
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) {
        next.delete(currentQuestion.id);
        showToast('Removed from saved');
      } else {
        next.add(currentQuestion.id);
        showToast('Saved');
      }
      return next;
    });
  }, [currentQuestion, showToast]);

  const resetProgress = useCallback(() => {
    if (!window.confirm('Reset which questions you have marked as seen? Saved questions are kept.')) return;
    setAnsweredIds(new Set());
    showToast('Progress reset');
  }, [showToast]);

  const searchedQuestions = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return [];
    return questions.filter(q =>
      q.question.toLowerCase().includes(term) ||
      q.category.toLowerCase().includes(term) ||
      q.vocabulary.some(v => v.phrase.toLowerCase().includes(term))
    );
  }, [searchQuery]);

  const handleSelectQuestion = (q: Question) => {
    setCurrentQuestion(q);
    setHistory(prev => [...prev.slice(0, currentIndex + 1), q]);
    setCurrentIndex(prev => prev + 1);
    setIsSearchOpen(false);
    setSearchQuery('');
    setExpandedVocab(null);
    setShowAllMeanings(false);
    window.location.hash = `q=${q.id}`;
  };

  const getRandomQuestion = useCallback(() => {
    tick();
    // If we are navigating history and not at the end, just go forward
    if (currentIndex < history.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentQuestion(history[nextIndex]);
      setExpandedVocab(null);
      setShowAllMeanings(false);
      window.location.hash = `q=${history[nextIndex].id}`;
      return;
    }

    setExpandedVocab(null);
    setShowAllMeanings(false); // Reset on new question
    const available = filteredQuestions.filter(q => !answeredIds.has(q.id));
    const pool = available.length > 0 ? available : filteredQuestions;
    if (pool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const newQuestion = pool[randomIndex];

    setCurrentQuestion(newQuestion);
    setHistory(prev => [...prev, newQuestion]);
    setCurrentIndex(prev => prev + 1);
    window.location.hash = `q=${newQuestion.id}`;
  }, [currentIndex, history, filteredQuestions, answeredIds]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      tick();
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentQuestion(history[prevIndex]);
      setExpandedVocab(null);
      setShowAllMeanings(false);
      window.location.hash = `q=${history[prevIndex].id}`;
    }
  }, [currentIndex, history]);

  const markAsAnswered = useCallback(() => {
    if (currentQuestion) {
      setAnsweredIds(prev => new Set([...prev, currentQuestion.id]));
      getRandomQuestion();
    }
  }, [currentQuestion, getRandomQuestion]);

  const anyOverlayOpen = isSearchOpen || isInfoOpen || mode === 'categories' || focusedVocabIndex !== null;
  const isFavorite = currentQuestion ? favorites.has(currentQuestion.id) : false;

  // --- Swipe navigation (left = next, right = previous) ---
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) { touchStart.current = null; return; }
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || anyOverlayOpen) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    const elapsed = Date.now() - start.t;

    if (elapsed > 700) return;                                  // a slow drag isn't a swipe
    if (Math.abs(dx) < SWIPE_DISTANCE) return;                  // not far enough
    if (Math.abs(dx) < Math.abs(dy) * SWIPE_RATIO) return;      // that was a scroll

    if (dx < 0) markAsAnswered();
    else handlePrevious();
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el?.tagName === 'INPUT' || el?.tagName === 'TEXTAREA') return;

      if (e.code === 'Escape') {
        setIsSearchOpen(false);
        setIsInfoOpen(false);
        setIsTimerMenuOpen(false);
        setFocusedVocabIndex(null);
        setMode('random');
        return;
      }

      if (anyOverlayOpen) return;

      if (e.code === 'Space') {
        e.preventDefault(); // Prevent scrolling
        getRandomQuestion();
      } else if (e.code === 'ArrowRight') {
        markAsAnswered();
      } else if (e.code === 'ArrowLeft') {
        handlePrevious();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [anyOverlayOpen, getRandomQuestion, markAsAnswered, handlePrevious]);

  // Initial Load once
  useEffect(() => {
    if (!currentQuestion && history.length === 0) {
      let initialQuestion: Question | undefined;

      // Check for hash
      const hash = window.location.hash;
      if (hash.startsWith('#q=')) {
        const id = parseInt(hash.replace('#q=', ''), 10);
        initialQuestion = questions.find(q => q.id === id);
      }

      if (!initialQuestion) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        initialQuestion = questions[randomIndex];
      }

      setCurrentQuestion(initialQuestion);
      setHistory([initialQuestion]);
      setCurrentIndex(0);
      window.location.hash = `q=${initialQuestion.id}`;
    }

    // Preloading all 17 photos is ~2.6 MB. That's fine on a desktop connection
    // and rude on a phone, so only do it when the network says it's welcome.
    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const frugal =
      conn?.saveData === true ||
      /^(slow-)?2g$|^3g$/.test(conn?.effectiveType ?? '') ||
      window.matchMedia(MOBILE_QUERY).matches;
    if (frugal) return;

    // Sequential, not parallel — a burst of 17 requests starves the fonts.
    let cancelled = false;
    const preloadTimer = setTimeout(async () => {
      for (const bg of backgrounds) {
        if (cancelled) return;
        await new Promise<void>(resolve => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = bg;
        });
      }
    }, 1500);

    return () => { cancelled = true; clearTimeout(preloadTimer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The back gesture is the primary navigation on a phone. Every question push
  // adds a hash entry, so mirror hash changes back into state — otherwise "back"
  // silently does nothing and the user is trapped in the app.
  useEffect(() => {
    const onHashChange = () => {
      const match = window.location.hash.match(/^#q=(\d+)$/);
      if (!match) return;
      const id = parseInt(match[1], 10);
      if (currentQuestion && id === currentQuestion.id) return;

      const q = questions.find(x => x.id === id);
      if (!q) return;

      const idx = history.findIndex(h => h.id === id);
      if (idx !== -1) setCurrentIndex(idx);
      setCurrentQuestion(q);
      setExpandedVocab(null);
      setShowAllMeanings(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [currentQuestion, history]);

  // Keep the browser UI tinted to match, and stop rubber-banding behind overlays.
  useEffect(() => {
    document.body.classList.toggle('overlay-open', anyOverlayOpen);
    return () => document.body.classList.remove('overlay-open');
  }, [anyOverlayOpen]);

  const bgIndex = currentQuestion ? currentQuestion.id % backgrounds.length : 0;
  const bgImage = backgrounds[bgIndex];

  const handleShare = async () => {
    if (!shareRef.current || !currentQuestion || isSharing) return;
    setIsSharing(true);
    try {
      // jsPDF/html2canvas are ~600 KB. Nobody should pay for them on first paint.
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(shareRef.current, {
        scale: 1,
        backgroundColor: '#1A1918',
        useCORS: true,
      });

      const blob: Blob | null = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('Could not render the card');

      const file = new File([blob], 'question-card.png', { type: 'image/png' });

      // Prefer the OS share sheet on mobile — a silent download is a dead end there.
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Questions About Life',
          text: currentQuestion.question,
        });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'question-card.png';
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        showToast('Card saved');
      }
    } catch (err) {
      if ((err as Error)?.name !== 'AbortError') {
        console.error('Share failed:', err);
        showToast('Could not create the card');
      }
    } finally {
      setIsSharing(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!currentQuestion || isBuildingPDF) return;
    setIsBuildingPDF(true);
    showToast('Preparing worksheet…');
    try {
      const { generatePDF } = await import('./utils/PDFGenerator');
      // Yield a frame so the toast paints before jsPDF blocks the main thread.
      await new Promise(resolve => setTimeout(resolve, 60));
      generatePDF(currentQuestion);
    } catch (err) {
      console.error('Worksheet failed:', err);
      showToast('Could not build the worksheet');
    } finally {
      setIsBuildingPDF(false);
    }
  };

  const handleBatchDownload = async () => {
    const questionsToDownload = filteredQuestions;
    if (!window.confirm(`Download ${questionsToDownload.length} worksheets? This will take a while.`)) return;

    const { generatePDF } = await import('./utils/PDFGenerator');
    for (const q of questionsToDownload) {
      generatePDF(q);
      await new Promise(resolve => setTimeout(resolve, 600)); // Delay to prevent browser download issues
    }
  };

  // Motion presets, collapsed to nothing when the OS asks for reduced motion.
  const stagger = reduceMotion ? 0 : (isMobile ? 0.025 : 0.04);
  const enter = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }
    : {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20, transition: { duration: isMobile ? 0.25 : 0.5 } },
      transition: { duration: isMobile ? 0.35 : 0.6, ease: 'easeInOut' as const },
    };

  return (
    <div className="app-container">
      {/* Dynamic Background — background-image can't be transitioned, so the old
          "cinematic fade" was really a hard cut. Crossfade two layers instead. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={bgImage}
          className="app-background"
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="app-overlay" />
      <div className="cinematic-vignette" />
      <div className="film-grain" />

      {/* Elegant Header */}
      <header className="top-bar">
        <div className="brand">Questions About Life</div>
        <div className="header-controls">
          <button
            className={`control-btn ${showAllMeanings ? 'active' : ''}`}
            onClick={() => setShowAllMeanings(!showAllMeanings)}
            title={showAllMeanings ? 'Hide Definitions' : 'Show All Definitions'}
            aria-pressed={showAllMeanings}
            aria-label={showAllMeanings ? 'Hide all definitions' : 'Show all definitions'}
          >
            {showAllMeanings ? <EyeOff size={18} /> : <Eye size={18} />}
            <span className="btn-label">{showAllMeanings ? 'Hide All' : 'Show All'}</span>
          </button>

          <div className="timer-dropdown-container">
            <button
              className={`control-btn ${timerDuration ? 'active' : ''}`}
              onClick={() => {
                if (timerDuration && timeLeft !== 0) {
                  toggleTimer(); // Pause or Resume
                } else {
                  setIsTimerMenuOpen(!isTimerMenuOpen);
                }
              }}
              title={timerDuration ? (isTimerActive ? 'Pause Timer' : 'Resume Timer') : 'Timer'}
              aria-label="Discussion timer"
            >
              <Timer size={18} />
              <span className="btn-label">
                {timerDuration ? (timeLeft !== null ? formatTime(timeLeft) : 'Timer') : 'Timer'}
              </span>
            </button>
            {/* On a phone the running clock needs to be readable without the label */}
            {timerDuration && timeLeft !== null && (
              <span className="timer-pip" aria-hidden="true">{formatTime(timeLeft)}</span>
            )}
            <AnimatePresence>
              {isTimerMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="timer-menu"
                >
                  <button onClick={() => startTimer(2)}>2 Minutes</button>
                  <button onClick={() => startTimer(5)}>5 Minutes</button>
                  <button onClick={() => startTimer(10)}>10 Minutes</button>
                  {timerDuration && (
                    <button className="cancel-timer" onClick={cancelTimer}>Clear Timer</button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="control-btn" onClick={() => setIsSearchOpen(true)} title="Search Questions" aria-label="Search questions">
            <Search size={18} />
            <span className="btn-label">Search</span>
          </button>

          <button className="control-btn" onClick={() => setIsInfoOpen(true)} title="About this Project" aria-label="About this project">
            <InfoIcon size={18} />
            <span className="btn-label">Info</span>
          </button>
        </div>
      </header>

      {/* Timer Progress Bar */}
      <AnimatePresence>
        {timerDuration && timeLeft !== null && (
          <motion.div
            className="timer-bar-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 4, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <motion.div
              className={`timer-bar-fill ${timeLeft === 0 ? 'timer-done' : ''}`}
              initial={{ width: '100%' }}
              animate={{ width: `${(timeLeft / timerDuration) * 100}%` }}
              transition={{ ease: 'linear', duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        className="main-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              className="content-wrapper"
              initial={enter.initial}
              animate={enter.animate}
              exit={enter.exit}
              transition={enter.transition}
            >
              <div className="question-area" aria-live="polite" aria-atomic="true">
                {!showAllMeanings && (
                  <>
                    {/* Depth Indicator */}
                    <motion.div
                      className="question-meta"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <button
                        className="meta-category"
                        onClick={() => setMode('categories')}
                        aria-label={`Category: ${currentQuestion.category}. Browse categories`}
                      >
                        {currentQuestion.category}
                      </button>
                      {currentQuestion.depthLevel && (
                        <>
                          <span className="meta-rule" aria-hidden="true" />
                          <span
                            className="depth-indicator"
                            title={`Depth level ${currentQuestion.depthLevel} of 4`}
                            aria-label={`Depth level ${currentQuestion.depthLevel} of 4`}
                          >
                            {[1, 2, 3, 4].map(level => (
                              <span
                                key={level}
                                className={`depth-dot ${currentQuestion.depthLevel >= level ? 'on' : ''}`}
                              />
                            ))}
                          </span>
                        </>
                      )}
                    </motion.div>

                    <motion.h2
                      className="main-question"
                      data-size={questionSize(currentQuestion.question)}
                      variants={{
                        hidden: { opacity: 1 },
                        visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: 0.1 } }
                      }}
                      initial="hidden"
                      animate="visible"
                      key={currentQuestion.id}
                    >
                      {currentQuestion.question.split(' ').map((word, i) => (
                        // The trailing {' '} is a real space text node: the words are
                        // inline-block for the stagger, and without it the headline
                        // copies to the clipboard as one unbroken string.
                        <Fragment key={`${currentQuestion.id}-${i}`}>
                          <motion.span
                            className="q-word"
                            variants={{
                              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 15, filter: 'blur(8px)' },
                              visible: {
                                opacity: 1, y: 0, filter: 'blur(0px)',
                                transition: { type: 'spring', stiffness: 100, damping: 20 }
                              }
                            }}
                          >
                            {word}
                          </motion.span>{' '}
                        </Fragment>
                      ))}
                    </motion.h2>
                  </>
                )}
              </div>

              {/* Vocab Area - Streamlined */}
              <div className="vocab-area">
                <motion.div
                  className={`vocab-list ${showAllMeanings ? 'show-all-mode' : ''}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: reduceMotion ? 0 : 0.07, delayChildren: reduceMotion ? 0 : 0.3 }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  key={currentQuestion.id + '-vocab'} // re-trigger on new question
                >
                  {currentQuestion.vocabulary.map((v, i) => {
                    const isExpanded = expandedVocab === i || showAllMeanings;
                    return (
                      <motion.button
                        type="button"
                        key={i}
                        variants={{
                          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                        }}
                        className={`vocab-chip ${isExpanded ? 'active' : ''}`}
                        aria-expanded={isExpanded}
                        onClick={() => {
                          tick(6);
                          if (showAllMeanings) {
                            setFocusedVocabIndex(i);
                          } else {
                            setExpandedVocab(expandedVocab === i ? null : i);
                          }
                        }}
                      >
                        <span className="vocab-term">{v.phrase}</span>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.span
                              className="vocab-detail"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: reduceMotion ? 0 : 0.25 }}
                            >
                              {v.translation && <span className="vocab-translation">{v.translation}</span>}
                              {v.type && <span className="vocab-type">{v.type}</span>}
                              <span className="vocab-example">“{v.example}”</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Focus Modal Overlay */}
      <AnimatePresence>
        {focusedVocabIndex !== null && currentQuestion?.vocabulary[focusedVocabIndex] && (
          <motion.div
            className="vocab-focus-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFocusedVocabIndex(null)}
          >
            <motion.div
              className="vocab-focus-card"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-focus-btn" onClick={() => setFocusedVocabIndex(null)} aria-label="Close">
                <X size={22} />
              </button>
              {(() => {
                const v = currentQuestion.vocabulary[focusedVocabIndex];
                return (
                  <>
                    <span className="vocab-term large">{v.phrase}</span>
                    <div className="vocab-detail large">
                      {v.translation && <span className="vocab-translation">{v.translation}</span>}
                      {v.type && <span className="vocab-type">{v.type}</span>}
                      <p className="vocab-example">“{v.example}”</p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action bar — fixed in the thumb zone on mobile, a quiet strip on desktop */}
      {currentQuestion && (
        <nav className="action-bar" aria-label="Question navigation">
          <button
            className="act-btn"
            onClick={handlePrevious}
            disabled={currentIndex <= 0}
            aria-label="Previous question"
          >
            <ChevronLeft size={20} />
            <span className="act-label">Previous</span>
          </button>

          <button className="act-btn" onClick={handleDownloadPDF} disabled={isBuildingPDF} aria-label="Download worksheet">
            <Download size={20} />
            <span className="act-label">{isBuildingPDF ? 'Building…' : 'Worksheet'}</span>
          </button>

          <button className="act-btn" onClick={handleShare} disabled={isSharing} aria-label="Share this question">
            <Share2 size={20} />
            <span className="act-label">{isSharing ? 'Making…' : 'Share'}</span>
          </button>

          <button
            className={`act-btn ${isFavorite ? 'act-saved' : ''}`}
            onClick={toggleFavorite}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? 'Remove from saved' : 'Save this question'}
          >
            <Star size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            <span className="act-label">{isFavorite ? 'Saved' : 'Save'}</span>
          </button>

          <button className="act-btn act-primary" onClick={markAsAnswered} aria-label="Next question">
            <ChevronRight size={20} />
            <span className="act-label">Next</span>
          </button>
        </nav>
      )}

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) { setIsSearchOpen(false); setSearchQuery(''); }
            }}
          >
            <div className="search-container" onClick={(e) => e.stopPropagation()}>
              <div className="search-header">
                <Search size={20} className="search-icon-inner" />
                <input
                  type="search"
                  inputMode="search"
                  enterKeyHint="search"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="Search questions or keywords…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="close-search" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} aria-label="Close search">
                  <X size={22} />
                </button>
              </div>

              <div className="search-results">
                {searchedQuestions.length > 0 ? (
                  <>
                    <div className="search-count">{searchedQuestions.length} result{searchedQuestions.length === 1 ? '' : 's'}</div>
                    {searchedQuestions.map(q => (
                      <button
                        key={q.id}
                        className="search-result-item"
                        onClick={() => handleSelectQuestion(q)}
                      >
                        <span className="result-category">{q.category}</span>
                        <span className="result-text">{q.question}</span>
                      </button>
                    ))}
                  </>
                ) : (
                  searchQuery.trim() !== '' && (
                    <div className="no-results">No questions found matching your search.</div>
                  )
                )}

                {searchQuery.trim() === '' && (
                  <div className="search-hint">Type to find deep questions about life…</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Modal */}
      <AnimatePresence>
        {mode === 'categories' && (
          <motion.div
            className="category-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setMode('random'); }}
          >
            <div className="category-scroll">
              <div className="category-list">
                <button
                  key="all"
                  className={selectedCategory === 'All' ? 'is-selected' : ''}
                  onClick={() => { setSelectedCategory('All'); setMode('random'); }}
                >
                  All
                  <span className="cat-count">{seenCount}/{questions.length} seen</span>
                </button>

                <button
                  key="saved"
                  className={`${selectedCategory === SAVED ? 'is-selected' : ''} ${favorites.size === 0 ? 'is-empty' : ''}`}
                  disabled={favorites.size === 0}
                  onClick={() => { setSelectedCategory(SAVED); setMode('random'); }}
                >
                  Saved
                  <span className="cat-count">
                    {favorites.size === 0 ? 'none yet' : `${favorites.size} question${favorites.size === 1 ? '' : 's'}`}
                  </span>
                </button>

                {categories.map(cat => {
                  const p = categoryProgress.get(cat);
                  return (
                    <button
                      key={cat}
                      className={selectedCategory === cat ? 'is-selected' : ''}
                      onClick={() => { setSelectedCategory(cat); setMode('random'); }}
                    >
                      {cat}
                      {p && <span className="cat-count">{p.seen}/{p.total} seen</span>}
                    </button>
                  );
                })}
              </div>

              <div className="category-footer">
                <button className="bulk-download-btn" onClick={handleBatchDownload}>
                  <Download size={16} />
                  Download {filteredQuestions.length} worksheet{filteredQuestions.length === 1 ? '' : 's'}
                </button>
                <button className="close-cat" onClick={() => setMode('random')}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Overlay */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            className="info-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsInfoOpen(false)}
          >
            <motion.div
              className="info-container"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-info" onClick={() => setIsInfoOpen(false)} aria-label="Close">
                <X size={24} />
              </button>

              <div className="info-content">
                <h2 className="info-title">About the Project</h2>

                <section className="info-section">
                  <h3>Who I Am</h3>
                  <p>
                    I am Matthew James Soldato, an educator and designer passionate about merging technology with meaningful human connection.
                    My work focuses on creating tools that facilitate deeper conversations and structured learning.
                  </p>
                </section>

                <section className="info-section">
                  <h3>Why I Created This</h3>
                  <p>
                    "Questions About Life" was born from a simple belief: that the right question at the right time
                    can shift a perspective. I wanted to build a space that strips away the noise and provides a
                    focused, aesthetic experience for exploring the big ideas that matter most.
                  </p>
                  <p>
                    This application is designed to be a companion for reflection, a tool for language learners
                    to practice complex expression, and a catalyst for honest dialogue.
                  </p>
                </section>

                <section className="info-section">
                  <h3>How to Use It</h3>
                  <p className="info-shortcuts">
                    <span>Swipe left or right to move between questions.</span>
                    <span>Tap a phrase to reveal its meaning and an example.</span>
                    <span>On a keyboard: <kbd>Space</kbd> shuffles, <kbd>←</kbd> and <kbd>→</kbd> navigate.</span>
                  </p>
                </section>

                <section className="info-section">
                  <h3>Your Progress</h3>
                  <p className="info-progress">
                    <span><strong>{seenCount}</strong> of {questions.length} questions marked as seen</span>
                    <span><strong>{favorites.size}</strong> saved for later</span>
                  </p>
                  <button className="info-reset" onClick={resetProgress}>Reset progress</button>
                </section>

                <footer className="info-footer">
                  <p>Built with curiosity by Matthew James Soldato.</p>
                  <p className="version">{questions.length} questions · v1.0.0</p>
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            role="status"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Capture Card */}
      {currentQuestion && (
        <div id="share-capture-card" ref={shareRef} aria-hidden="true">
          <span className="share-category">{currentQuestion.category}</span>
          <h1 className="share-question">{currentQuestion.question}</h1>
          <div className="share-footer">
            <span className="share-brand">Questions About Life</span>
            <span className="share-link">questionsabout.life</span>
          </div>
        </div>
      )}

      <footer className="app-footer" onClick={() => setShowCopyright(!showCopyright)}>
        <div className="author-credit" style={{ opacity: showCopyright ? 1 : 0 }}>
          © {new Date().getFullYear()} Matthew James Soldato
        </div>
      </footer>
    </div>
  );
}

export default App;
