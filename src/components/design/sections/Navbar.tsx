import navItems from '@/constants/navItems';
import { Link } from '@/constants/scroll';

export default function Navbar() {
	return (
		<nav className='bg-black bg-opacity-85 [backdrop-filter:_blur(1.5px)] border-none [border-bottom:_solid_2px_white] w-full h-12 sticky self-start top-0 z-50'>
			<div className='w-full h-full flex flex-row justify-center'>
				{navItems.map((navItem) => {
					return (
						<Link
							to={navItem.references}
							offset={-96}
							duration={500}
							smooth={'easeOutQuint'}
							ignoreCancelEvents
							key={navItem.key}
							className='min-w-12 grid place-items-center'>
							<div className='w-full grid place-items-center group/nav cursor-pointer'>
								<div className='max-h-4'>
									<p className='w-full h-4 text-[50%] leading-4 text-white grid place-items-center select-none'>
										{navItem.name}
									</p>
									<div className='pointer-events-none w-0 h-4 -translate-y-4 [backdrop-filter:_invert(1)] group-hover/nav:w-full ease-out duration-200'></div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
