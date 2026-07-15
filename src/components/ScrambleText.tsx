import { useEffect, useMemo, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  const textChars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 28;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;

      const next = textChars
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (progress * textChars.length > index) {
            return char;
          }

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (frame >= totalFrames) {
        window.clearInterval(id);
        setDisplay(text);
      }
    }, 32);

    return () => window.clearInterval(id);
  }, [text, textChars]);

  return <span className={className}>{display}</span>;
}
