import AboutIcons from '../molecules/AboutIcons';
import AboutIntro from '../molecules/AboutIntro';
import AboutMain from '../molecules/AboutMain';
import AboutSecondary from '../molecules/AboutSecondary';

import { Element } from '@/constants/providers/react-scroll';

export default function About() {
	return (
		<Element name='About' className='overflow-x-hidden'>
			<section className='xl:px-12 px-4 py-12'>
				<AboutIntro />
			</section>
			<section className='xl:px-24 px-4 flex flex-col gap-12'>
				<AboutMain />
				<AboutIcons />
				<AboutSecondary />
			</section>
		</Element>
	);
}
