'use client'
 
import {useEffect, useRef, ReactNode} from "react"

type scrollProps = {
  className?: string,
  onVisible: string[],
  onHidden: string[],
  threshold: number,
  children?: ReactNode,
}

export default function ScrollObserver({className, onVisible, onHidden, threshold, children}: scrollProps) {

  const itemRef = useRef<HTMLElement>(null!);

    useEffect(() => {

      const onScroll = () => {
        if(window.scrollY > (itemRef.current.offsetTop - (window.innerHeight) * threshold)) {
          itemRef.current.classList.remove(...onHidden)
          itemRef.current.classList.add(...onVisible)
        } else {
          itemRef.current.classList.remove(...onVisible)
          itemRef.current.classList.add(...onHidden)
        }
      }

      window.removeEventListener('scroll', onScroll);
      window.removeEventListener("resize", onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, []);

  return (
    <main ref={itemRef} className={className}>
      {children}
    </main>
  );
}