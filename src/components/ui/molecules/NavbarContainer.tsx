export default function NavbarContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<nav className='bg-black bg-opacity-85 [backdrop-filter:_blur(1.5px)] border-b-2 border-b-white w-full h-12 sticky self-start top-0 z-50'>
			<div className='w-full h-full flex flex-row justify-center'>
				{children}
			</div>
		</nav>
	);
}
