/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // aqui você pode adicionar o domínio ou endereço IP onde as imagens estão hospedadas
  },
};

module.exports = nextConfig;
