import { PageBackground, PageBanner, PageNavbar } from '@/constants/ui/interfaceItems';
import { About, Projects, Socials } from '@/constants/ui/contentItems';

export default function Page() {
	return (
		<>
			<PageBackground />
			<PageBanner />
			<PageNavbar />
			<main className='h-[3000px]'>
				<About />
				<Projects />
				<Socials />
			</main>
		</>
	);
}
