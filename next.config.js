import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const baseConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io',
      }
    ]
  },
};

/**
 * @param {string} phase
 * @returns {Promise<import("next").NextConfig>} 
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 */
const config = async (phase) => {
  console.log(!process.env.CI && phase === PHASE_PRODUCTION_BUILD, phase);
  if (
    phase === PHASE_DEVELOPMENT_SERVER ||
    !process.env.CI && phase === PHASE_PRODUCTION_BUILD
  ) {
    return baseConfig
  }

  return {
    ...baseConfig,
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
  };  
  
}
export default config;
