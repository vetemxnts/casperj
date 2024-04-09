import AboutIcons from './AboutIcons';
import AboutIntro from './AboutIntro';
import AboutMain from './AboutMain';
import AboutSecondary from './AboutSecondary';

export default function About() {
	return (
		<>
			<section className='xl:px-12 px-4 py-12'>
				<AboutIntro />
			</section>
			<section className='xl:px-24 px-4 flex flex-col gap-12'>
				<AboutMain />
				<AboutIcons />
				<AboutSecondary />
			</section>
		</>
	);
}
