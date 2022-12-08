const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
require("dotenv").config();

const connectDB = require("./config/dbConn");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");

const postController = require("./controllers/postController");
const commentController = require("./controllers/commentController");

const app = express();
const PORT = process.env.PORT || 8000;

// connect to MongoDB
// connectDB();

mongoose.set("strictQuery", false);

// custom middleware logger
// app.use(logger);

// adding Helmet to enhance your API's security
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// cors
app.use(cors(corsOptions));

// Built-in middleware to handle urlencoded  form data:
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(compression()); // Compress all routes

// serve static files
app.use(
	"/",
	express.static(path.join(__dirname, "/public"), {
		cacheControl: true,
		maxAge: "365d",
		immutable: true,
	})
);
app.use(
	"/uploads",
	express.static("uploads", {
		cacheControl: true,
		maxAge: "365d",
		immutable: true,
	})
);

app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/contact", require("./routes/contact"));

// have access without access token
app.get("/posts", postController.getAllPosts);
app.get("/posts/comments", commentController.getLastComments);
app.get("/posts/tags", postController.getLastTags);
app.get("/posts/:id", postController.getPost);
app.get("/posts/:postId/comments", commentController.getAllComments);
app.get("/tags/:tag", postController.getTag);
app.use("/upload", require("./routes/api/upload"));

// verify JWT
app.use(verifyJWT);

// Now we have access
app.use("/auth/me", require("./routes/api/user"));
app.use("/users", require("./routes/api/users"));
app.use("/posts", require("./routes/api/posts"));

app.use(errorHandler);

connectDB().then(() =>
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`);
	})
);
