import PageBannerBeam from './PageBannerBeam';

export default function PageBannerPrimary() {
	return (
		<div className='w-max h-auto flex flex-row px-[10vw]'>
			<div className='text-white text-[clamp(1rem,10vw,5rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.5rem] animate-typewriter'>
				<p className='text-shadow-white'>
					casper<b className='text-sky-400 text-shadow-sky'>j</b>
				</p>
			</div>
			<PageBannerBeam />
		</div>
	);
}
