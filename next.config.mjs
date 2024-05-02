/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
            pathname: "/products/**",
        },
        {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "/dvegoqfdf/image/**",
        }
    ]
    }
};

export default nextConfig;
