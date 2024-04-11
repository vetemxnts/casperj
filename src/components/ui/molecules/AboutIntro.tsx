import ScrollObserver from '@/components/misc/ScrollObserver';

export default function AboutIntro() {
	return (
		<>
			<ScrollObserver
				className='transition-transform-opacity ease-smooth duration-.5s'
				activeStyles={[
					['-translate-x-24', 'opacity-0'],
					['translate-x-0', 'opacity-100'],
				]}>
				<h1 className='text-white text-[min(6vw,4rem)] text-shadow-white'>
					My name is Kacper and I am an aspiring web developer from Warsaw, Poland.
				</h1>
			</ScrollObserver>

			<ScrollObserver
				className='w-0 h-[2px] mt-12 bg-white transition-width ease-smooth duration-.375s'
				activeStyles={[['w-0'], ['w-full']]}
			/>
		</>
	);
}
