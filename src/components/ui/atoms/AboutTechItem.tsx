import { iconWithCaption } from '@/constants/types';

export default function AboutTechItem(item: iconWithCaption) {
	return (
		<a
			href={item.href}
			target='_blank'
			className='w-16 h-20 grid place-items-center gap-0 text-neutral-300 translate-y-0 hover:translate-y-1 transition-transform duration-500 ease-smooth'>
			<div className='w-16 h-16 grid place-items-center'>
				<item.icon />
			</div>
			<div className='w-16 h-4 text-[0.5rem] grid place-items-center'>{item.name}</div>
		</a>
	);
}
