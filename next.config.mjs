/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'uqyxqjsufmhzosvtcxuh.supabase.co',
        },
      ],
    },
  };
  
  export default nextConfig;
  