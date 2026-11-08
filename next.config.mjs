/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'rest.cloudinary.com'
            }
        ]
    }
};

export default nextConfig;
