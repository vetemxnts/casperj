import BannerLogo from '../molecules/BannerLogo';

export default function Banner() {
	return (
		<main className='w-full h-[calc(100svh-3rem+2px)] bg-banner bg-opacity-85 backdrop-blur-sm flex justify-start items-center overflow-hidden z-10'>
			<BannerLogo />
		</main>
	);
}
