import PageBannerLogo from '../molecules/PageBannerLogo';

export default function PageBanner() {
	return (
		<main className='[background:_radial-gradient(circle,rgba(248,113,113,0.2)_0%,rgba(0,0,0,0.5)_100%)] w-full h-[calc(100svh-3rem+2px)] [backdrop-filter:_blur(1.5px)] overflow-hidden z-10'>
			<div className='w-full h-full [background:_linear-gradient(0deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] flex justify-start items-center'>
				<PageBannerLogo />
			</div>
		</main>
	);
}
