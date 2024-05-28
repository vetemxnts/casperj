import ScrollObserver from '@/components/misc/ScrollObserver';
import { linksListItems } from '@/constants/objects/LinksListItems';
import { scrollAnimationStyle } from '@/constants/types';
import LinksListItem from '../atoms/LinksListItem';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-x-8', 'opacity-0'],
	onVisible: ['-translate-x-0', 'opacity-100'],
};

export default function LinksList() {
	return (
		<ScrollObserver className='w-full flex lg:flex-row flex-col gap-8' scrollAnimation={animation}>
			{linksListItems.map((item) => (
				<LinksListItem {...item} />
			))}
		</ScrollObserver>
	);
}
