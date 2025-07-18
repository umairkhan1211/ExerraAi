"use client";
import { useState, useEffect } from "react";
import { Rubik } from "next/font/google";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const words = [
  "scalable systems for modern businesses.",
  "AI-powered tools for automation.",
  "custom pipelines to grow your sales.",
  "conversion-focused digital journeys.",
  "intelligent assistants for support.",
];

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let updatedText = deleting
      ? currentWord.substring(0, charIndex - 1)
      : currentWord.substring(0, charIndex + 1);

    setText(updatedText);

    if (!deleting && updatedText === currentWord) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const delay = deleting ? 40 : 80;
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (deleting ? -1 : 1));
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, deleting, wordIndex]);

  return (
    <h2
      className={`text-sm sm:text-base md:text-lg font-semibold text-center mt-4 w-full px-4 leading-normal ${rubik.className} blur-text-fade-in`}
    >
      <span className="text-white glow-text">We build </span>
      <span className="text-[#ffb237] glow-text">
        {text}
      </span>
      <span
        className="text-[#ffb237]"
        style={{ fontWeight: "600", display: "inline-block", minWidth: "1ch" }}
      >
        {cursorVisible ? "|" : "\u00A0"}
      </span>
    </h2>
  );
}