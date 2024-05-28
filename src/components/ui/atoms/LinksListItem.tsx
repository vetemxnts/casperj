import { iconWithCaption } from '@/constants/types';

export default function LinksListItem(item: iconWithCaption) {
	return (
		<a
			href={item.href}
			target='_blank'
			className='lg:w-1/3 w-max flex flex-col gap-2 text-neutral-300 translate-y-0 hover:translate-y-1 transition-transform duration-500 ease-smooth'>
			<div className='w-full h-16 grid place-items-center'>
				<item.icon />
			</div>
			<div className='w-full text-center text-[0.5rem]'>{item.name}</div>
		</a>
	);
}
