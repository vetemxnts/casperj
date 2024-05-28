import LinksListHeader from '../atoms/LinksListHeader';
import LinksListContainer from '../atoms/LinksListContainer';

export default function LinksList() {
	return (
		<div className='flex flex-col gap-8'>
			<LinksListHeader />
			<LinksListContainer />
		</div>
	);
}
