'use client';

import { useEffect, useRef } from 'react';

export default function PageBackground() {
	const backgroundRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		const onScroll = () => {
			backgroundRef.current.style.transform = `translateY(-${
				window.scrollY / 4
			}px)`;
		};
		onScroll();

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
	}, []);

	return (
		<div
			ref={backgroundRef}
			className="bg-[url('/bg.png')] bg-repeat bg-center w-full h-[3000px] fixed -z-20"></div>
	);
}
