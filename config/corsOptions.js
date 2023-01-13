const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
	origin: "*",
	methods: "GET,PUT,POST,OPTIONS,DELETE",
	optionsSuccessStatus: 200,
};

module.exports = corsOptions;
