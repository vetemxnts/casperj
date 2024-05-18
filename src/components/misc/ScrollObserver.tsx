'use client';

import { useEffect, useRef, ReactNode } from 'react';

type scrollProps = {
	className?: string;
	children?: ReactNode;
	activeStyles: [onHidden: string[], onVisible: string[]];
};

export default function ScrollObserver({
	className,
	children,
	activeStyles,
}: scrollProps) {
	const itemRef = useRef<HTMLElement>(null!);

	useEffect(() => {
		const onScroll = () => {
			let thresholdIn = itemRef.current.offsetTop - window.innerHeight * 0.625;
			let thresholdOut = itemRef.current.offsetTop - window.innerHeight;

			if (window.scrollY > thresholdIn) {
				itemRef.current.classList.remove(...activeStyles[0]);
				itemRef.current.classList.add(...activeStyles[1]);
			} else if (window.scrollY < thresholdOut) {
				itemRef.current.classList.remove(...activeStyles[1]);
				itemRef.current.classList.add(...activeStyles[0]);
			}
		};
		onScroll();

		['scroll', 'resize'].forEach(function (e) {
			window.removeEventListener(e, onScroll);
			window.addEventListener(e, onScroll, { passive: true });
		});
	}, [activeStyles]);

	return (
		<article
			ref={itemRef}
			className={`${className} ${activeStyles[0].join(' ')}`}>
			{children}
		</article>
	);
}
