'use client'
 
import { useEffect, useRef, ReactNode } from "react"

type scrollProps = {
  className?: string,
  children?: ReactNode,
  styles: [onHidden: string[], onVisible: string[]],
  animation: string
}

export default function ScrollObserver({
  className, children, styles, animation
}: scrollProps) {

  const itemRef = useRef<HTMLElement>(null!);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > (itemRef.current.offsetTop - window.innerHeight * 0.625)) {
          itemRef.current.classList.remove(...styles[0]);
          itemRef.current.classList.add(...styles[1]);
        } else if (window.scrollY < (itemRef.current.offsetTop - window.innerHeight * 1.0)) {
          itemRef.current.classList.remove(...styles[1]);
          itemRef.current.classList.add(...styles[0]);
        }
      }
      onScroll();
      
      ['scroll', 'resize'].forEach(function(e){
        window.removeEventListener(e, onScroll);
        window.addEventListener(e, onScroll, { passive: true });
      })
    }, []);

  return (
    <article ref={itemRef} className={`${className} ${styles[0].join(' ')} ${animation}`}>
      {children}
    </article>
  );
}