import AboutIcons from '../atoms/AboutIcons';
import AboutPrimary from '../atoms/AboutPrimary';
import AboutSecondary from '../atoms/AboutSecondary';

export default function AboutMain() {
	return (
		<section className='xl:px-12 flex flex-col gap-12'>
			<AboutPrimary />
			<AboutIcons />
			<AboutSecondary />
		</section>
	);
}
