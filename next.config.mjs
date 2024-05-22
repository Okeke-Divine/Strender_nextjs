/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Routes this applies to
                source: "/api/(.*)",
                // Headers
                headers: [
                    // Allow for specific domains to have access or * for all
                    {
                        key: "Access-Control-Allow-Origin",
                        value: process.env.ALLOWED_ORIGIN,
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
