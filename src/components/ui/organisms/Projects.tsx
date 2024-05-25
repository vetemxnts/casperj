import { Element } from '@/constants/react-scroll';
import ProjectsHeader from '../atoms/ProjectsHeader';
import ProjectsList from '../molecules/ProjectsList';

export default function Projects() {
	return (
		<Element name='Projects' className='overflow-hidden xl:px-24 px-8 py-12 flex flex-col gap-12'>
			<ProjectsHeader />
			<ProjectsList />
		</Element>
	);
}
