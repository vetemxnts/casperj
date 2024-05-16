import { Link } from '@/constants/providers/react-scroll';

const navbarItems = [
	{ key: 0, name: 'About' },
	{ key: 1, name: 'Projects' },
	{ key: 2, name: 'Socials' },
];

export default function PageNavbar() {
	return (
		<nav className='bg-black bg-opacity-85 [backdrop-filter:_blur(1.5px)] border-b-2 border-b-white w-full h-12 sticky self-start top-0 z-50'>
			<div className='w-full h-full flex flex-row justify-center'>
				{navbarItems.map((navItem) => {
					return (
						<Link
							to={navItem.name}
							offset={-96}
							duration={500}
							smooth={'easeOutQuint'}
							ignoreCancelEvents
							key={navItem.key}
							className='min-w-12 grid place-items-center cursor-pointer group'>
							<div className='w-full grid place-items-center'>
								<p className='w-full h-4 text-[50%] leading-4 text-white group-hover:text-red-400 grid place-items-center select-none transition-all duration-.25s ease-smooth'>
									{navItem.name}
								</p>
								<span className='relative -bottom-1 w-0 group-hover:w-3/4 h-px bg-red-400 transition-all duration-.25s ease-smooth'></span>
							</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
