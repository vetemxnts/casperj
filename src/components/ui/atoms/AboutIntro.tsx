import ScrollObserver from '@/components/misc/ScrollObserver';

export default function AboutIntro() {
	return (
		<ScrollObserver
			className='transition-transform-opacity ease-smooth duration-.5s'
			activeStyles={[
				['-translate-x-24', 'opacity-0'],
				['translate-x-0', 'opacity-100'],
			]}>
			<h1 className='text-white text-[min(5vw,4rem)]'>
				My name is Kacper and I am an aspiring web developer from Warsaw,
				Poland.
			</h1>
		</ScrollObserver>
	);
}
