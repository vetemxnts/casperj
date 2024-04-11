import ScrollObserver from '@/components/misc/ScrollObserver';

export default function AboutSecondary() {
	return (
		<ScrollObserver
			className='transition-transform-opacity ease-smooth duration-.5s'
			activeStyles={[
				['scale-90', 'opacity-0'],
				['scale-100', 'opacity-100'],
			]}>
			<h1 className='text-white text-[min(5vw,1rem)] text-shadow-white'>
				I aim to create elegant and responsive websites for multiple purposes, like blogs and
				promotional pages.
			</h1>
			<br />
			<h1 className='text-sky-400 text-[min(5vw,1rem)] text-shadow-sky'>
				I also work with web apps involving data analysis using relaitonal and non-relational
				databases.
			</h1>
		</ScrollObserver>
	);
}
