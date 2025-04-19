import type { NextConfig } from "next";

// Import the next-intl plugin for internationalization
import createNextIntlPlugin from 'next-intl/plugin';

// Initialize the plugin, specifying the path to the i18n configuration file
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  // It activates additional checks and warnings for its descendants.
  reactStrictMode: true,

  // Configuration for handling images with next/image.
  images: {
    // Define allowed remote image domains. Add your CDN or image storage domains here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Example: Allow Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Allow placeholder images
      },
      // Add other domains as needed (e.g., for product images from Stripe/LemonSqueezy)
      // {
      //   protocol: 'https',
      //   hostname: 'files.stripe.com',
      // },
    ],
  },

  // Experimental features (use with caution)
  // experimental: {
  //   serverActions: true, // Enable Server Actions (if using)
  // },

  // Add other Next.js configurations here as needed:
  // - redirects: async () => { ... }
  // - headers: async () => { ... }
  // - env: { MY_ENV_VAR: process.env.MY_ENV_VAR }
  // - webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { ... }
};

export default withNextIntl(nextConfig);
