import Banner from '@/components/design/sections/Banner';
import Navbar from '@/components/design/sections/Navbar';
import Content from '@/components/design/sections/Content';
import Background from '@/components/misc/Background';

export default function Page() {
	return (
		<>
			<Background />
			<Banner />
			<Navbar />
			<Content />
		</>
	);
}
