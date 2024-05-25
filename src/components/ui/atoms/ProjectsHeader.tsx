import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-y-4', 'opacity-0'],
	onVisible: ['-translate-y-0', 'opacity-100'],
};

export default function ProjectsHeader() {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-center text-neutral-300'>
				My <b className='text-red-400'>Projects</b>
			</h1>
		</ScrollObserver>
	);
}
