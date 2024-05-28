import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-x-8', 'opacity-0'],
	onVisible: ['-translate-x-0', 'opacity-100'],
};

export default function ProjectsList() {
	return (
		<ScrollObserver className='text-neutral-300 ' scrollAnimation={animation}>
			There are currently no projects here.
		</ScrollObserver>
	);
}
