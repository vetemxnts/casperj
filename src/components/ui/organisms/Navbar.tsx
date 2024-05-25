import NavbarItem from '../atoms/NavbarItem';
import NavbarContainer from '../molecules/NavbarContainer';

const navbarItems = [
	{ key: 0, name: 'About' },
	{ key: 1, name: 'Projects' },
	{ key: 2, name: 'Links' },
];

export default function Navbar() {
	return (
		<NavbarContainer>
			{navbarItems.map((navItem) => {
				return <NavbarItem name={navItem.name} key={navItem.key} />;
			})}
		</NavbarContainer>
	);
}
