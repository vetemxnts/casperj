import AboutIntro from '../atoms/AboutIntro';
import AboutMain from '../molecules/AboutMain';

import { Element } from '@/constants/react-scroll';

export default function About() {
	return (
		<Element name='About' className='overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12'>
			<AboutIntro />
			<AboutMain />
		</Element>
	);
}
