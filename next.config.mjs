/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export", // Active l'export statique
  images: { unoptimized: true }, // Désactive l'optimisation des images
  basePath: isProd ? "/nom-du-repo" : "", // Remplace par ton repo GitHub
  assetPrefix: isProd ? "/nom-du-repo/" : "",
};

export default nextConfig;
