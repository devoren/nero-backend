// CORS (CROSS ORIGIN RESOURCE SHARING) to apply the middleware
// list of sites that have access to your server
const allowedOrigins = [
	"http://127.0.0.1:5500",
	"http://localhost:3000",
	"https://nero-frontend.vercel.app",
	"https://devoren.vercel.app",
];

module.exports = allowedOrigins;
