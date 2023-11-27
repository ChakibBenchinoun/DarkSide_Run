import clsx from 'clsx'

import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import background from '../public/background.jpeg'
import logo from '../public/logo.jpeg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'DarkSide_Run',
	description: 'DarkSide_Run Club',
}

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About Us', href: '/' },
	{ name: 'Events', href: '/' },
]

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, 'relative bg-black text-white')}>
				<nav
					aria-label="Global"
					className="sticky top-0 z-50 border-b border-white bg-black"
				>
					<div className="container m-auto flex items-center justify-between p-2 lg:px-8">
						<a href="#" className="-m-1.5 flex items-center">
							<span className="sr-only">Your Company</span>
							<Image
								className="h-16 w-16"
								src={logo}
								alt=""
								width={600}
								height={600}
							/>
							<span className="ml-2 font-bold text-white">
								DARKSIDE <span className="text-teal-400">RUN</span>
							</span>
						</a>
						<div>
							<div className="hidden lg:flex lg:gap-x-12">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-md font-semibold leading-6"
									>
										{item.name}
									</a>
								))}
								<a href="/" className="text-lg font-semibold leading-6">
									Contact Us
								</a>
							</div>
							<div className="flex lg:hidden">
								<button
									type="button"
									className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								>
									Menu
								</button>
							</div>
						</div>
					</div>
				</nav>
				<Image
					src={background}
					alt=""
					className="filt absolute top-0 z-0 h-screen object-cover filter"
				/>
				{children}
			</body>
		</html>
	)
}
