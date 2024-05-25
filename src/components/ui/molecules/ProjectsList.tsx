import ScrollObserver from '@/components/misc/ScrollObserver';

export default function ProjectsList() {
	return (
		<ScrollObserver
			className='text-neutral-300 '
			scrollAnimation={{
				onHidden: ['-translate-x-4', 'opacity-0'],
				onVisible: ['-translate-x-0', 'opacity-100'],
			}}>
			There are currently no projects here.
		</ScrollObserver>
	);
}
