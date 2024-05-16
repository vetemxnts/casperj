import ScrollObserver from '@/components/misc/ScrollObserver';

export default function ProjectsHeader() {
	return (
		<ScrollObserver
			className='w-full text-center text-white transition-transform-opacity duration-.5s ease-smooth'
			activeStyles={[
				['-translate-y-4', 'opacity-0'],
				['-translate-y-0', 'opacity-100'],
			]}>
			My projects
		</ScrollObserver>
	);
}
