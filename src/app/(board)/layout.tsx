import { ThemeProvider } from 'next-themes'
import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import LeftBar from '@/components/left-bar'
import RightBar from '@/components/Right-bar'

export default function BoardLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body>
					<ThemeProvider attribute='class' defaultTheme='dark'>
						<div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between'>
							<div className='px-2 xsm:px-4 xxl:px-8 '>
								<LeftBar />
							</div>
							<div className='flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray '>
								{children}
								{modal}
							</div>
							<div className='hidden lg:flex ml-4 md:ml-8 flex-1 '>
								<RightBar />
							</div>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
