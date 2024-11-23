import React, { useState, useEffect } from "react";

const rotatingWords = [" Engineers", " Developers", "Designers", " Infrasnap"];

const useTypewriter = (words, delay = 150) => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        if (isTyping) {
            if (letterIndex < words[wordIndex].length) {
                const timeout = setTimeout(() => {
                    setText((prevText) => prevText + words[wordIndex][letterIndex]);
                    setLetterIndex(letterIndex + 1);
                }, delay);
                return () => clearTimeout(timeout);
            } else {
                // Pause after fully typing the word
                setTimeout(() => {
                    setIsTyping(false);
                }, 1000); // 1-second pause
            }
        } else {
            if (letterIndex > 0) {
                const timeout = setTimeout(() => {
                    setText((prevText) => prevText.slice(0, -1));
                    setLetterIndex(letterIndex - 1);
                }, delay);
                return () => clearTimeout(timeout);
            } else {
                // Move to the next word
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsTyping(true);
            }
        }
    }, [text, letterIndex, isTyping, wordIndex, words, delay]);

    return text;
};

const LoadingScreen = ({ onComplete }) => {
    const animatedText = useTypewriter(rotatingWords, 50);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval); // Stop the interval once progress reaches 100
                    onComplete(); // Notify parent that loading is complete
                    return 100;
                }
                return prev + 1;
            });
        }, 100); // 100ms * 100 steps = 10 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [onComplete]);

    return (
        <div className="flex flex-col h-screen p-4 overflow-hidden"
        style={{
            backgroundImage: `url('assets/loadingBack.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            {/* Centered Animated Text */}
            <div className="flex-grow flex items-center justify-center text-center">
                <div className="bg-black-600 text-4xl md:text-6xl font-bold mb-8 p-4 text-white tracking-wide">
                    <span>We are {animatedText}</span>
                    <span className="text-white animate-blink">|</span>
                </div>
            </div>

            {/* Loading Bar with Moving Label */}
            <div className="flex justify-center items-center mb-4" style={{ position: 'relative', bottom: '10px', width: '100%' }}>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-300 rounded mx-auto relative">
                    <div
                        className="w-3/4 h-full bg-black rounded transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    ></div>

                    {/* Moving Loading Text */}
                    <p
                        className="absolute p-2 text-gray-700 text-sm font-medium transition-all"
                        style={{
                            left: `${progress}%`,
                            transform: "translateX(-50%)",
                            bottom: "10px",
                            marginBottom: "4px",
                            maxWidth: "20px",
                            textAlign: "center",
                        }}
                    >
                        Loading<sup>{progress}%</sup>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
