import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['translate-y-12', 'opacity-0'],
	onVisible: ['translate-y-0', 'opacity-100'],
};

export default function AboutPrimary() {
	return (
		<ScrollObserver
			className='grid gap-8 place-items-center grid-flow-row lg:grid-flow-col'
			scrollAnimation={animation}>
			<span className="w-32 h-full min-h-32 [background-image:url('/author.png')]"></span>
			<h1 className='h-full text-red-400 text-[min(5vw,1rem)] p-4'>
				I picked up programming 5 years ago and ever since then web development has been one of my main hobbies, which
				later turned into a career choice. Over that time period I've obtained a bunch of skills and picked up good
				coding habits.
			</h1>
		</ScrollObserver>
	);
}
