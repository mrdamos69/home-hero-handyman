/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real project photos are currently served from the business's own
    // Yelp profile. For long-term stability, download them into
    // /public/images and switch the URLs in src/config/gallery.ts.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fl.yelpcdn.com",
        pathname: "/bphoto/**",
      },
    ],
  },
};

export default nextConfig;
