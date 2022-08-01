import { useLayoutEffect, useRef, useState } from 'react';

interface QuoteProps {
    quote: string;
    author: string;
}

export const Quote = ( { quote, author }: QuoteProps ) => {

  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
    setBoxSize({ width, height });
  }, [quote])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}
      >
          <p ref={ pRef }>{ quote }</p>
          <footer className="blockquote-footer">{ author }</footer>
          <code>{ JSON.stringify(boxSize) }</code>
      </blockquote>      
    </>
    
  )
}
