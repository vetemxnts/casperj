import ProjectsListContainer from '../atoms/ProjectsListContainer';
import ProjectsListHeader from '../atoms/ProjectsListHeader';

export default function ProjectsList() {
	return (
		<div className='flex flex-col gap-8'>
			<ProjectsListHeader />
			<ProjectsListContainer />
		</div>
	);
}
