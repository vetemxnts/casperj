import NavbarItem from '../atoms/NavbarItem';

const navbarItems = ['About', 'Projects', 'Links'];

export default function Navbar() {
	return (
		<nav className='bg-black bg-opacity-85 backdrop-blur-sm border-b-2 border-b-white w-full h-12 flex flex-row justify-center sticky self-start top-0 z-50'>
			{navbarItems.map((navItem, index) => (
				<NavbarItem name={navItem} key={index} />
			))}
		</nav>
	);
}
