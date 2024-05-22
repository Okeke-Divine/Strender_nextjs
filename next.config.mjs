/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return {
            source: "/api/(.*)",
            headers: {
                key: "Access-Control-Allow-Origin",
                value: process.env.ALLOWED_ORIGIN,
            }
        }
    }
};

export default nextConfig;
