import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['translate-y-4', 'opacity-0'],
	onVisible: ['translate-y-0', 'opacity-100'],
};

export default function LinksHeader() {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-[min(12vw,2.5rem)] text-neutral-300'>Links:</h1>
		</ScrollObserver>
	);
}
