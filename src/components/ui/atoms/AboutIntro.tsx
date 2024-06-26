import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-x-8', 'opacity-0'],
	onVisible: ['translate-x-0', 'opacity-100'],
};

export default function AboutIntro() {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-neutral-300 text-[clamp(1.5rem,6vw,3rem)]'>
				My name is <b className='text-red-400'>Kacper</b> and I am an aspiring web developer from Warsaw, Poland.
			</h1>
		</ScrollObserver>
	);
}
