import ScrollObserver from '@/components/misc/ScrollObserver';
import { linksListItems } from '@/constants/objects/LinksListItems';
import LinksListItem from './LinksListItem';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-x-8', 'opacity-0'],
	onVisible: ['-translate-x-0', 'opacity-100'],
};

export default function LinksListContainer() {
	return (
		<ScrollObserver
			className='w-full flex lg:flex-row flex-col justify-center items-center gap-8'
			scrollAnimation={animation}>
			{linksListItems.map((item) => (
				<LinksListItem {...item} />
			))}
		</ScrollObserver>
	);
}
