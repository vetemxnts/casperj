'use client';

import { useEffect, useRef } from 'react';
import { scrollObserverProps } from '@/constants/types';

export default function ScrollObserver({ className, children, scrollAnimation }: scrollObserverProps) {
	const itemRef = useRef<HTMLElement>(null!);

	useEffect(() => {
		const onScroll = () => {
			let thresholdIn = itemRef.current.offsetTop - window.innerHeight * 0.625;
			let thresholdOut = itemRef.current.offsetTop - window.innerHeight;

			if (window.scrollY > thresholdIn) {
				itemRef.current.classList.remove(...scrollAnimation.onHidden);
				itemRef.current.classList.add(...scrollAnimation.onVisible);
			} else if (window.scrollY < thresholdOut) {
				itemRef.current.classList.remove(...scrollAnimation.onVisible);
				itemRef.current.classList.add(...scrollAnimation.onHidden);
			}
		};
		onScroll();

		['scroll', 'resize'].forEach(function (e) {
			window.removeEventListener(e, onScroll);
			window.addEventListener(e, onScroll, { passive: true });
		});
	}, [scrollAnimation]);

	return (
		<article
			ref={itemRef}
			className={`${className} ${scrollAnimation.onHidden.join(
				' '
			)} transition-transform-opacity ease-smooth duration-500`}>
			{children}
		</article>
	);
}
