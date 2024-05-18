export default function BannerSecondary() {
	return (
		<div className='w-max h-[clamp(0.375rem,3.75vw,1.875rem)] px-[10vw] text-red-400 text-[clamp(0.25rem,2.5vw,1.25rem)] whitespace-nowrap tracking-[0.125rem]'>
			<div className='opacity-5 overflow-hidden animate-banner'>
				Kacper Jeznach
			</div>
			<div className='-translate-y-[clamp(0.375rem,3.75vw,1.875rem)] overflow-hidden animate-bannerDelayed'>
				Kacper Jeznach
			</div>
		</div>
	);
}
