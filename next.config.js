/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
		remotePatterns: [
			// {
			// 	protocol: 'https',
			// 	hostname: 'images.unsplash.com',
			// },
		],
	},
}

module.exports = nextConfig
