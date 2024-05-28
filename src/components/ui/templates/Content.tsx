import About from '../organisms/About';
import Projects from '../organisms/Projects';
import Links from '../organisms/Links';

export default function Content() {
	return (
		<main className='divide-y divide-dashed divide-neutral-400'>
			<About />
			<Projects />
			<Links />
		</main>
	);
}
