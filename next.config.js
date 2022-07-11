const API_KEY = "10923b261ba94d897ac6b81148314a3f";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {   //source의 URL로 갈 때 destination의 URL로 바뀐다.
    return [
      {
        source: "/old-blog/:path*",
        destination: "/form/:path*",
        permanent: false,
      }
    ];
  },
  async rewrites() {  // URL이 변하지 않음(유저가 API KEY를 확인할 수 없음)
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  }
};

module.exports = nextConfig
