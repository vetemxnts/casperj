export default function BannerPrimary() {
	return (
		<div className='w-max h-[clamp(1.5rem,15vw,7.5rem)] text-neutral-300 text-[clamp(1rem,10vw,5rem)] whitespace-nowrap tracking-widest'>
			<div className='opacity-5 overflow-hidden animate-banner'>
				casper<b className='text-red-400'>j</b>
			</div>
			<div className='-translate-y-[clamp(1.5rem,15vw,7.5rem)] overflow-hidden animate-bannerDelayed'>
				casper<b className='text-red-400'>j</b>
			</div>
		</div>
	);
}
