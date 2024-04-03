/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "res.cloudinary.com",
			},
		],
	},
	// Add ESLint configuration
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
