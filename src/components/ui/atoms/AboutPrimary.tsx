import ScrollObserver from '@/components/misc/ScrollObserver';

export default function AboutPrimary() {
	return (
		<ScrollObserver
			className='grid gap-8 place-items-center grid-flow-row lg:grid-flow-col transition-transform-opacity ease-smooth duration-.5s'
			activeStyles={[
				['translate-y-12', 'opacity-0'],
				['translate-y-0', 'opacity-100'],
			]}>
			<span className="w-32 h-full min-h-32 [background-image:url('/author.png')]"></span>
			<h1 className='h-full text-red-400 text-[min(5vw,1rem)] p-4'>
				I picked up programming 5 years ago after finding an old JavaScript book
				at my school's library. Ever since then web development has been one of
				my hobbies and later on a career choice.
			</h1>
		</ScrollObserver>
	);
}
