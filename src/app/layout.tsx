import type { Metadata } from 'next';
import './globals.css';

import { poppins } from '@/constants/providers/fonts';

export const metadata: Metadata = {
	title: 'CASPERJ | Kacper Jeznach',
	description: 'I am a web developer from Warsaw, Poland.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={poppins.className}>
			<body>{children}</body>
		</html>
	);
}
