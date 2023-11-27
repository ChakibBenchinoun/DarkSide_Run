export default function Home() {
	return (
		<main>
			{/* Hero Section */}
			<div className="relative isolate h-screen bg-black/40  pt-14 backdrop-blur-sm">
				<div className="container px-6 py-32 sm:py-48 lg:px-8 lg:py-56">
					<div className="max-w-4xl">
						<h1 className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-4xl text-transparent sm:text-6xl">
							Welcome to the club of{' '}
							<span className="font-bold text-white">DARKSIDE</span>{' '}
							<span className="font-bold text-teal-400">RUN</span>
						</h1>
						<p className="mt-6 text-lg leading-8">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Get started
							</a>
							<a href="#" className="text-sm font-semibold leading-6">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
