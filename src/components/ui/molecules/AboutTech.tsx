import ScrollObserver from '@/components/misc/ScrollObserver';
import { aboutTechItems } from '@/constants/objects/aboutTechItems';
import { scrollAnimationStyle } from '@/constants/types';
import AboutTechItem from '../atoms/AboutTechItem';

const animation: scrollAnimationStyle = {
	onHidden: ['translate-x-8', 'opacity-0'],
	onVisible: ['translate-x-0', 'opacity-100'],
};

export default function AboutTech() {
	return (
		<ScrollObserver className='flex flex-col gap-4' scrollAnimation={animation}>
			<h1 className='text-neutral-300 text-center'>Technologies that I use:</h1>
			<div className='lg:flex lg:flex-row md:grid-cols-[4rem_4rem_4rem] md:grid-rows-2 grid justify-around grid-cols-[4rem_4rem] grid-rows-3'>
				{aboutTechItems.map((item) => (
					<AboutTechItem {...item} />
				))}
			</div>
		</ScrollObserver>
	);
}
