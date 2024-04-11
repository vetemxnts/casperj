import PageBannerBeam from './PageBannerBeam';

export default function PageBannerSecondary() {
	return (
		<div className='w-max h-auto flex flex-row px-[10vw]'>
			<div className='text-sky-400 text-[clamp(0.25rem,2.5vw,1.25rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.125rem] animate-typewriter'>
				<p className='text-shadow-sky'>Kacper Jeznach</p>
			</div>
			<PageBannerBeam />
		</div>
	);
}
