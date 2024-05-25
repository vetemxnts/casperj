import BannerPrimary from '../atoms/BannerPrimary';
import BannerSecondary from '../atoms/BannerSecondary';

export default function BannerLogo() {
	return (
		<div className='flex flex-col gap-1 px-[10vw]'>
			<BannerPrimary />
			<BannerSecondary />
		</div>
	);
}
