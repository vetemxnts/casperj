import type { Metadata } from 'next';
import './globals.css';

import { notoSansMono } from '@/constants/providers/fonts';

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
		<html lang='en' className={notoSansMono.className}>
			<body>{children}</body>
		</html>
	);
}
