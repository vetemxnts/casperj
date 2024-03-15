'use client'
 
import {useEffect, useRef, ReactNode} from "react"

type scrollProps = {
  className?: string,
  children?: ReactNode,
  onVisible: string[],
  onHidden: string[],
  animation: string,
}

export default function ScrollObserver({
  className, children, onVisible, onHidden, animation
}: scrollProps) {

  const itemRef = useRef<HTMLElement>(null!);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > (itemRef.current.offsetTop - window.innerHeight * 0.5)) {
          itemRef.current.classList.remove(...onHidden);
          itemRef.current.classList.add(...onVisible);
        } else if (window.scrollY < (itemRef.current.offsetTop - window.innerHeight * 1.0)) {
          itemRef.current.classList.remove(...onVisible);
          itemRef.current.classList.add(...onHidden);
        }
      }
      onScroll();
      
      ['scroll', 'resize'].forEach(function(e){
        window.removeEventListener(e, onScroll);
        window.addEventListener(e, onScroll, { passive: true });
      })
    }, []);

  return (
    <main ref={itemRef} className={`${className} ${onHidden} ${animation}`}>
      {children}
    </main>
  );
}