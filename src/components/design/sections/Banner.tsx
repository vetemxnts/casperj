export default function Banner() {
	return (
		<main className='[background:_radial-gradient(circle,rgba(56,189,248,0.5)_0%,rgba(0,0,0,0.5)_100%)] w-full h-[calc(100vh-3rem+2px)] [backdrop-filter:_blur(1.5px)] overflow-hidden z-10'>
			<div className='w-full h-[calc(100vh-3rem+2px)] [background:_linear-gradient(0deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] flex justify-start items-center'>
				<div className='flex flex-col gap-1'>
					<div className='w-max h-auto flex flex-row px-[10vw]'>
						<div className='text-white text-[clamp(1rem,10vw,5rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.5rem] animate-typewriter'>
							<p className='text-shadow-white'>
								casper<b className='text-sky-400 text-shadow-sky'>j</b>
							</p>
						</div>
						<div className='w-1 h-auto bg-white animate-typewriterbeam'></div>
					</div>
					<div className='w-max h-auto flex flex-row px-[10vw]'>
						<div className='text-sky-400 text-[clamp(0.25rem,2.5vw,1.25rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.125rem] animate-typewriter'>
							<p className='text-shadow-sky'>Kacper Jeznach</p>
						</div>
						<div className='w-1 h-auto bg-white animate-typewriterbeam'></div>
					</div>
				</div>
			</div>
		</main>
	);
}
