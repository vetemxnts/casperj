import { Background, Banner, Navbar } from '@/constants/ui/interfaceItems';
import { About, Projects, Socials } from '@/constants/ui/contentItems';

export default function Page() {
	return (
		<>
			<Background />
			<Banner />
			<Navbar />
			<main className='h-[3000px]'>
				<About />
				<Projects />
				<Socials />
			</main>
		</>
	);
}
