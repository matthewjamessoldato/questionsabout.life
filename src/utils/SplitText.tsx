import React from 'react';

interface SplitTextProps {
    text: string;
    className?: string;
    wordClassName?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', wordClassName = '' }) => {
    // Split the text into words, preserving spaces
    const words = text.split(/(\s+)/);

    return (
        <span className={`inline-block ${className}`}>
            {words.map((word, i) => {
                // If it's pure whitespace, just render the space so we don't animate gaps
                if (/\s+/.test(word)) {
                    return <span key={i}>{word}</span>;
                }

                // Wrap actual words in an inner span for the transform/opacity animations
                return (
                    <span
                        key={i}
                        className="gsap-word-wrapper"
                        style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
                    >
                        <span
                            className={`gsap-word inline-block ${wordClassName}`}
                            style={{ display: 'inline-block', transformOrigin: '0% 100%' }}
                        >
                            {word}
                        </span>
                    </span>
                );
            })}
        </span>
    );
};
