import { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, ChevronLeft, Share2, Eye, EyeOff, Search, X, Info as InfoIcon, Timer } from 'lucide-react';
import html2canvas from 'html2canvas';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { SplitText } from './utils/SplitText';
import { questions, categories } from './data/questions';
import type { Question } from './data/questions';
import { generatePDF } from './utils/PDFGenerator';

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

function App() {
  const [mode, setMode] = useState<Mode>('random');
  const [showCopyright, setShowCopyright] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const shareRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    if (!shareRef.current) return;
    try {
      const canvas = await html2canvas(shareRef.current, {
        scale: 1,
        backgroundColor: '#1A1918',
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `question-card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error("Share failed:", err);
    }
  };
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [answeredIds, setAnsweredIds] = useState<Set<number>>(new Set());

  // History State
  const [history, setHistory] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Animation Refs
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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

  const startTimer = (minutes: number) => {
    const seconds = minutes * 60;
    setTimerDuration(seconds);
    setTimeLeft(seconds);
    setIsTimerActive(true);
    setIsTimerMenuOpen(false);
  };

  const cancelTimer = () => {
    setIsTimerActive(false);
    setTimerDuration(null);
    setTimeLeft(null);
  };

  const toggleTimer = () => {
    setIsTimerActive(prev => !prev);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };




  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  const searchedQuestions = searchQuery.trim() === ''
    ? []
    : questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.vocabulary.some(v => v.phrase.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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

  const getRandomQuestion = () => {
    // If we are navigating history and not at the end, just go forward
    if (currentIndex < history.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentQuestion(history[nextIndex]);
      setExpandedVocab(null);
      setShowAllMeanings(false);
      return;
    }

    setExpandedVocab(null);
    setShowAllMeanings(false); // Reset on new question
    const available = filteredQuestions.filter(q => !answeredIds.has(q.id));
    const pool = available.length > 0 ? available : filteredQuestions;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const newQuestion = pool[randomIndex];

    setCurrentQuestion(newQuestion);
    setHistory(prev => [...prev, newQuestion]);
    setCurrentIndex(prev => prev + 1);
    window.location.hash = `q=${newQuestion.id}`;
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentQuestion(history[prevIndex]);
      setExpandedVocab(null);
      setShowAllMeanings(false);
      window.location.hash = `q=${history[prevIndex].id}`;
    }
  };

  const markAsAnswered = () => {
    if (currentQuestion) {
      setAnsweredIds(prev => new Set([...prev, currentQuestion.id]));
      getRandomQuestion();
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if search is open or an input is focused
      if (isSearchOpen || document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

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
  }, [currentQuestion, answeredIds, selectedCategory, isSearchOpen, history, currentIndex]);

  // Background Image Logic
  const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16, bg17];

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

    // Preload backgrounds with a slight delay to avoid initial lag
    const preloadTimer = setTimeout(() => {
      backgrounds.forEach((bg) => {
        const img = new Image();
        img.src = bg;
      });
    }, 1000);

    return () => clearTimeout(preloadTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const bgIndex = currentQuestion ? currentQuestion.id % backgrounds.length : 0;
  const bgImage = backgrounds[bgIndex];

  // GSAP Cinematic Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Ken Burns Background Effect
      if (bgRef.current) {
        // Reset scale and opacity
        gsap.killTweensOf(bgRef.current);
        gsap.set(bgRef.current, { scale: 1, x: 0, y: 0, opacity: 0 });

        // Fade in
        gsap.to(bgRef.current, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });

        // Slow pan and zoom
        gsap.to(bgRef.current, {
          scale: 1.15,
          x: '2%',
          y: '1%',
          duration: 30,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      }

      // 2. Staggered Text Reveal
      if (!showAllMeanings && currentQuestion) {
        // We use a tiny timeout to ensure the DOM has updated with the new SplitText elements from React
        setTimeout(() => {
          if (!textRef.current) return;
          const words = textRef.current.querySelectorAll('.gsap-word');
          if (words.length > 0) {
            gsap.killTweensOf(words);

            gsap.fromTo(words,
              {
                y: '100%',
                opacity: 0,
                rotation: 2
              },
              {
                y: '0%',
                opacity: 1,
                rotation: 0,
                duration: 1.2,
                stagger: 0.03,
                ease: 'power3.out',
                delay: 0.2 // slight delay after bg starts fading
              }
            );
          }
        }, 50);
      }
    });

    return () => ctx.revert(); // Cleanup animations on unmount or question change
  }, [bgImage, currentQuestion, showAllMeanings]);

  const handleDownloadPDF = () => {
    if (currentQuestion) {
      generatePDF(currentQuestion);
    }
  };

  const handleBatchDownload = async () => {
    const questionsToDownload = selectedCategory === 'All'
      ? questions
      : questions.filter(q => q.category === selectedCategory);

    if (!window.confirm(`Are you sure you want to download ${questionsToDownload.length} worksheets?`)) return;

    for (const q of questionsToDownload) {
      generatePDF(q);
      await new Promise(resolve => setTimeout(resolve, 600)); // Delay to prevent browser download issues
    }
  };


  return (
    <div className="app-container">
      {/* Dynamic GSAP Ken Burns Background */}
      <div
        ref={bgRef}
        className="app-background"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0 // GSAP handles the fade in
        }}
      />
      <div className="app-overlay" />
      <div className="cinematic-vignette" />
      <div className="film-grain" />

      {/* Elegant Header */}
      <header className="top-bar">
        <div className="brand" style={{ flex: 1 }}>Questions About Life</div>
        <div className="header-controls" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            className={`control-btn ${showAllMeanings ? 'active' : ''}`}
            onClick={() => setShowAllMeanings(!showAllMeanings)}
            title={showAllMeanings ? "Hide Definitions" : "Show All Definitions"}
          >
            {showAllMeanings ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="hidden md:inline">{showAllMeanings ? "Hide All" : "Show All"}</span>
          </button>

          <div className="timer-dropdown-container" style={{ position: 'relative' }}>
            <button
              className={`control-btn ${timerDuration ? 'active' : ''}`}
              onClick={() => {
                if (timerDuration && timeLeft !== 0) {
                  toggleTimer(); // Pause or Resume
                } else {
                  setIsTimerMenuOpen(!isTimerMenuOpen);
                }
              }}
              title={timerDuration ? (isTimerActive ? "Pause Timer" : "Resume Timer") : "Timer"}
            >
              <Timer size={16} />
              <span className="hidden md:inline">
                {timerDuration ? (timeLeft !== null ? formatTime(timeLeft) : 'Timer') : 'Timer'}
              </span>
            </button>
            <AnimatePresence>
              {isTimerMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
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

          <button
            className="control-btn"
            onClick={() => setIsSearchOpen(true)}
            title="Search Questions"
          >
            <Search size={16} />
            <span className="hidden md:inline">Search</span>
          </button>

          <button
            className="control-btn"
            onClick={() => setIsInfoOpen(true)}
            title="About this Project"
          >
            <InfoIcon size={16} />
            <span className="hidden md:inline">Info</span>
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
              transition={{ ease: "linear", duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-stage">
        <AnimatePresence mode='wait'>
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              className="content-wrapper"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 1.2 }
              }}
            >
              <div className="question-area">
                {!showAllMeanings && (
                  <h2
                    ref={textRef}
                    className="main-question"
                    style={{
                      fontSize: currentQuestion.question.length > 200 ? '2.5rem' :
                        currentQuestion.question.length > 100 ? '3rem' :
                          currentQuestion.question.length > 60 ? '4rem' : '5rem'
                    }}
                  >
                    <SplitText text={currentQuestion.question} />
                  </h2>
                )}
              </div>


              {/* Vocab Area - Streamlined */}
              <div className="vocab-area">
                <div className={`vocab-list ${showAllMeanings ? 'show-all-mode' : ''}`}>
                  {currentQuestion.vocabulary.map((v, i) => {
                    const isExpanded = expandedVocab === i || showAllMeanings;
                    return (
                      <div
                        key={i}
                        className={`vocab-chip ${isExpanded ? 'active' : ''}`}
                        onClick={() => {
                          if (showAllMeanings) {
                            setFocusedVocabIndex(i);
                          } else {
                            setExpandedVocab(expandedVocab === i ? null : i);
                          }
                        }}
                      >
                        <span className="vocab-term">{v.phrase}</span>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              className="vocab-detail"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {v.translation && <span className="vocab-translation">{v.translation}</span>}
                              {v.type && <span className="vocab-type">{v.type}</span>}
                              <p className="vocab-example">"{v.example}"</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Focus Modal Overlay */}
                <AnimatePresence>
                  {focusedVocabIndex !== null && currentQuestion.vocabulary[focusedVocabIndex] && (
                    <motion.div
                      className="vocab-focus-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setFocusedVocabIndex(null)}
                    >
                      <motion.div
                        className="vocab-focus-card"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="close-focus-btn" onClick={() => setFocusedVocabIndex(null)}>×</button>
                        {(() => {
                          const v = currentQuestion.vocabulary[focusedVocabIndex];
                          return (
                            <>
                              <span className="vocab-term large">{v.phrase}</span>
                              <div className="vocab-detail large">
                                {v.translation && <span className="vocab-translation">{v.translation}</span>}
                                {v.type && <span className="vocab-type">{v.type}</span>}
                                <p className="vocab-example">"{v.example}"</p>
                              </div>
                            </>
                          );
                        })()}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Minimal Controls - Fixed at bottom */}
              <div className="controls-area">
                {/* Navigation */}
                <footer className="nav-bar">
                  <button
                    className="nav-btn"
                    onClick={handlePrevious}
                    disabled={currentIndex <= 0}
                    style={{ opacity: currentIndex <= 0 ? 0.5 : 1, cursor: currentIndex <= 0 ? 'default' : 'pointer' }}
                  >
                    <ChevronLeft size={14} />
                    <span>Previous</span>
                    <span className="key-hint">[Left]</span>
                  </button>

                  <button className="nav-btn practice-btn" onClick={handleDownloadPDF} style={{ background: '#eab308', color: '#1A1918', fontWeight: 'bold' }}>
                    <Download size={14} />
                    <span>Download Worksheet</span>
                  </button>

                  <button className="nav-btn" onClick={handleShare}>
                    <Share2 size={14} />
                    <span>Share</span>
                  </button>

                  <button className="nav-btn" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }} onClick={() => setMode('categories')}>
                    {currentQuestion.category}
                  </button>

                  <button className="nav-btn" onClick={markAsAnswered}>
                    <span>Next</span>
                    <ChevronRight size={14} />
                  </button>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="search-container">
              <div className="search-header">
                <Search size={20} className="search-icon-inner" />
                <input
                  type="text"
                  placeholder="Search questions, categories, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="close-search" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}>
                  <X size={20} />
                </button>
              </div>

              <div className="search-results">
                {searchedQuestions.length > 0 ? (
                  searchedQuestions.map(q => (
                    <button
                      key={q.id}
                      className="search-result-item"
                      onClick={() => handleSelectQuestion(q)}
                    >
                      <span className="result-category">{q.category}</span>
                      <span className="result-text">{q.question}</span>
                    </button>
                  ))
                ) : (
                  searchQuery.trim() !== '' && (
                    <div className="no-results">No questions found matching your search.</div>
                  )
                )}

                {searchQuery.trim() === '' && (
                  <div className="search-hint">Type to find deep questions about life...</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Modal */}
      {mode === 'categories' && (
        <div className="category-overlay">
          <div className="category-list">
            <button key="all" onClick={() => { setSelectedCategory('All'); setMode('random'); }}>All</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setSelectedCategory(cat); setMode('random'); }}>{cat}</button>
            ))}
          </div>

          <div className="category-footer">
            <button className="bulk-download-btn" onClick={handleBatchDownload}>
              <Download size={16} />
              Download All {selectedCategory === 'All' ? '109' : selectedCategory} Worksheets
            </button>
            <button className="close-cat" onClick={() => setMode('random')}>Close</button>
          </div>
        </div>
      )}

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
              <button className="close-info" onClick={() => setIsInfoOpen(false)}>
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

                <footer className="info-footer">
                  <p>Built with curiosity by Matthew James Soldato.</p>
                  <p className="version">v1.0.0</p>
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Capture Card */}
      {currentQuestion && (
        <div id="share-capture-card" ref={shareRef}>
          <span className="share-category">{currentQuestion.category}</span>
          <h1 className="share-question">{currentQuestion.question}</h1>
          <div className="share-footer">
            <span className="share-brand">Questions About Life</span>
            <span className="share-link">questionsabout.life</span>
          </div>
        </div>
      )}

      <footer className="app-footer" onClick={() => setShowCopyright(!showCopyright)} style={{ cursor: 'pointer' }}>
        <div className="author-credit" style={{ opacity: showCopyright ? 1 : 0, transition: 'opacity 0.3s ease' }}>© {new Date().getFullYear()} Matthew James Soldato</div>
      </footer>
    </div>
  );
}

export default App;
