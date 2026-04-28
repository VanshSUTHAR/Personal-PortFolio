"use client"
import {useEffect, useState} from "react";
export const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (index < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index, wordIndex, words]);

  return <span>{text}</span>;
};
