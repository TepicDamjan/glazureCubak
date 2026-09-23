import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fiksiramo root na ovaj projekat da Next ne bi pogrešno izabrao
  // roditeljski folder (zbog zalutalog package-lock.json iznad).
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
