import PageBannerPrimary from '../atoms/PageBannerPrimary';
import PageBannerSecondary from '../atoms/PageBannerSecondary';

export default function PageBannerLogo() {
	return (
		<div className='flex flex-col gap-1'>
			<PageBannerPrimary />
			<PageBannerSecondary />
		</div>
	);
}
