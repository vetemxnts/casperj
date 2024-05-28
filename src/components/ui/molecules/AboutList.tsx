import AboutListHeader from '../atoms/AboutListHeader';
import AboutListContainer from '../atoms/AboutListContainer';

export default function AboutList() {
	return (
		<div className='flex flex-col gap-8'>
			<AboutListHeader />
			<AboutListContainer />
		</div>
	);
}
