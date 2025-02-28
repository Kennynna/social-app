import { ThemeProvider } from 'next-themes'
import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export default function BoardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body>
					<ThemeProvider attribute='class' defaultTheme='dark'>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
