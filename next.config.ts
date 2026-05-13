import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

const localNetworkDevOrigins = Object.values(networkInterfaces())
  .flatMap((networkInterface = []) => networkInterface)
  .filter(({ family, internal }) => family === "IPv4" && !internal)
  .map(({ address }) => address);

const nextConfig: NextConfig = {
  // Allows phones/tablets on the same network to hydrate the dev app.
  allowedDevOrigins: ["127.0.0.1", ...localNetworkDevOrigins],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
