import ScrollObserver from '@/components/misc/ScrollObserver';
import { aboutListItems } from '@/constants/objects/aboutListItems';
import AboutListItem from './AboutListItem';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-x-8', 'opacity-0'],
	onVisible: ['-translate-x-0', 'opacity-100'],
};

export default function AboutListContainer() {
	return (
		<ScrollObserver
			className='lg:flex lg:flex-row md:grid-cols-[4rem_4rem_4rem] md:grid-rows-2 grid justify-around grid-cols-[4rem_4rem] grid-rows-3 gap-y-8'
			scrollAnimation={animation}>
			{aboutListItems.map((item, index) => (
				<AboutListItem {...item} key={index} />
			))}
		</ScrollObserver>
	);
}
