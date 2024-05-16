import { Element } from '@/constants/providers/react-scroll';
import ProjectsHeader from '../atoms/ProjectsHeader';

export default function Projects() {
	return (
		<Element name='Projects' className='overflow-x-hidden'>
			<ProjectsHeader />
		</Element>
	);
}
