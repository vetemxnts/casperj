import { Element } from '@/constants/react-scroll';
import ProjectsHeader from '../atoms/ProjectsListHeader';
import ProjectsList from '../molecules/ProjectsList';

export default function Projects() {
	return (
		<Element name='Projects' className='overflow-hidden xl:px-24 px-8 py-12 flex flex-col gap-8'>
			<ProjectsList />
		</Element>
	);
}
