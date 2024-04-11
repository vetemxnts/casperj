import ScrollObserver from '@/components/misc/ScrollObserver';
import { techIcons } from '@/constants/providers/icons';

export default function AboutIcons() {
	return (
		<ScrollObserver
			className='pb-4 bg-black bg-opacity-75 border-none [border-bottom:_solid_2px_white] transition-transform-opacity ease-smooth duration-.5s'
			activeStyles={[
				['translate-x-12', 'opacity-0'],
				['translate-x-0', 'opacity-100'],
			]}>
			<h1 className='text-center text-white text-shadow-white p-4'>Technologies that I use:</h1>
			<div className='lg:flex lg:flex-row md:grid-cols-[4rem_4rem_4rem] md:grid-rows-2 grid justify-around grid-cols-[4rem_4rem] grid-rows-3'>
				{techIcons.map((item) => (
					<a
						key={item.key}
						href={item.href}
						target='_blank'
						className='w-16 h-20 grid place-items-center gap-0 group/tech'>
						<div className='w-16 h-16 grid place-items-center'>
							<item.icon />
						</div>
						<div
							className='w-16 h-4 text-[0.5rem] text-white grid place-items-center
              text-shadow-transparent group-hover/tech:text-shadow-white transition-text-shadow ease-smooth duration-.5s'>
							{item.name}
						</div>
					</a>
				))}
			</div>
		</ScrollObserver>
	);
}
