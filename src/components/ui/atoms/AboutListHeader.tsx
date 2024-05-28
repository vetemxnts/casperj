import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-y-8', 'opacity-0'],
	onVisible: ['-translate-y-0', 'opacity-100'],
};

export default function AboutListHeader() {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-center text-neutral-300'>Technologies that i use:</h1>
		</ScrollObserver>
	);
}
