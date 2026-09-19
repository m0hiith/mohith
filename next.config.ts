import type { NextConfig } from "next";

const RESUME_URL =
  "https://www.dropbox.com/scl/fi/bw6wuowyony5enzu90zep/mohith-resume-final.pdf?rlkey=4wpojk59qsjyugujg5tuzmhvj&st=41w7t83u&dl=0";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  async redirects() {
    return [
      {
        source: "/resume",
        destination: RESUME_URL,
        permanent: false,
      },
      {
        source: "/resume.pdf",
        destination: RESUME_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
