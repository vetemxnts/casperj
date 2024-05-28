import { Element } from '@/constants/react-scroll';
import LinksHeader from '../atoms/LinksHeader';
import LinksList from '../molecules/LinksList';

export default function Links() {
	return (
		<Element name='Links' className='overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12'>
			<LinksHeader />
			<LinksList />
		</Element>
	);
}
