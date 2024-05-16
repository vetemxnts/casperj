import AboutIcons from './AboutIcons';
import AboutPrimary from './AboutPrimary';
import AboutSecondary from './AboutSecondary';

export default function AboutMain() {
	return (
		<section className='xl:px-12 flex flex-col gap-12'>
			<AboutPrimary />
			<AboutIcons />
			<AboutSecondary />
		</section>
	);
}
