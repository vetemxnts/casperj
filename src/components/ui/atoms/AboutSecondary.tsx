import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['scale-90', 'opacity-0'],
	onVisible: ['scale-100', 'opacity-100'],
};

export default function AboutSecondary() {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-neutral-300 text-[clamp(0.5rem,3vw,1rem)]'>
				I aim to create elegant and responsive websites for multiple purposes, like blogs and promotional pages.
			</h1>
			<br />
			<h1 className='text-red-400 text-[clamp(0.5rem,3vw,1rem)]'>
				I also work with web apps involving data analysis using relaitonal and non-relational databases.
			</h1>
		</ScrollObserver>
	);
}
