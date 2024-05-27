import ScrollObserver from '@/components/misc/ScrollObserver';
import { techIcons } from '@/constants/icons';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['translate-x-8', 'opacity-0'],
	onVisible: ['translate-x-0', 'opacity-100'],
};

export default function AboutIcons() {
	return (
		<ScrollObserver className='flex flex-col gap-4' scrollAnimation={animation}>
			<h1 className='text-center text-neutral-300'>Technologies that I use:</h1>
			<div className='lg:flex lg:flex-row md:grid-cols-[4rem_4rem_4rem] md:grid-rows-2 grid justify-around grid-cols-[4rem_4rem] grid-rows-3'>
				{techIcons.map((item) => (
					<a
						key={item.key}
						href={item.href}
						target='_blank'
						className='w-16 h-20 grid place-items-center gap-0 text-neutral-300 translate-y-0 hover:translate-y-1 transition-transform duration-500 ease-smooth'>
						<div className='w-16 h-16 grid place-items-center'>
							<item.icon />
						</div>
						<div className='w-16 h-4 text-[0.5rem] grid place-items-center'>{item.name}</div>
					</a>
				))}
			</div>
		</ScrollObserver>
	);
}
