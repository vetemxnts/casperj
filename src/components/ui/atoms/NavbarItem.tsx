import { Link } from '@/constants/react-scroll';

export default function NavbarItem({ name }: { name: string }) {
	return (
		<Link
			to={name}
			offset={-96}
			duration={500}
			smooth={'easeOutQuint'}
			ignoreCancelEvents
			className='min-w-12 grid place-items-center cursor-pointer group'>
			<div className='w-full grid place-items-center'>
				<p className='w-full h-4 text-[50%] leading-4 text-neutral-300 group-hover:text-red-400 grid place-items-center select-none transition-all duration-.25s ease-smooth'>
					{name}
				</p>
				<span className='relative -bottom-1 w-0 group-hover:w-3/4 h-px bg-red-400 transition-all duration-.25s ease-smooth'></span>
			</div>
		</Link>
	);
}
