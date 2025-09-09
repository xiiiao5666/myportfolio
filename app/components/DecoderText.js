import React, { useEffect, useRef } from 'react';
import { useSpring } from 'framer-motion';

const glyphs = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク',
                'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ',
                'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ',
                'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ',
                'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ー', 'ラ',
                'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヰ', 'ヱ', 'ヲ',
                 'ン'];

const shuffleText = (text, progress) => {
  return text.split('').map((char, index) => {
    if (index < Math.floor(progress * text.length)) {
      return char;
    }
    return glyphs[Math.floor(Math.random() * glyphs.length)];
  }).join('');
};

const DecoderText = ({ text, shouldShuffle }) => {
  const textRef = useRef(null);
  const spring = useSpring(0, { stiffness: 8, damping: 5 });

  useEffect(() => {
    const updateText = () => {
      if (textRef.current) {
        textRef.current.innerText = shuffleText(text, spring.get());
      }
    };

    if (shouldShuffle) {
      const unsubscribe = spring.on('change', updateText);
      spring.set(1); // Start shuffling after trigger
      return () => unsubscribe();
    }
  }, [spring, text, shouldShuffle]);

  return <span ref={textRef} className="decoder-text" />;
};

export default DecoderText;
