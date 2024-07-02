import React, { useState, useEffect } from "react";

type Props = {
  texts: string[];
};

const TypingText = (props: Props) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [displayedText, setDisplayedText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (!props.texts || props.texts.length === 0) return;
    setCurrentText(props.texts[textIndex] ?? "");
  }, [textIndex, props.texts]);

  useEffect(() => {
    let index = isDeleting ? currentText.length : 0;
    let typingInterval: NodeJS.Timeout | undefined;

    const typeText = () => {
      typingInterval = setInterval(() => {
        setDisplayedText(currentText.slice(0, index));
        index = isDeleting ? index - 1 : index + 1;
        if (index < 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % props.texts.length);
          clearInterval(typingInterval);
        } else if (index > currentText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setIsDeleting(true), 500); // Pause before deleting
        }
      }, 100);
    };

    typeText();

    return () => clearInterval(typingInterval);
  }, [currentText, isDeleting]);

  return (
    <div className='typing-text font-roboto bg-black text-[56px] font-bold text-white'>
      {displayedText}_
    </div>
  );
};

export default TypingText;
