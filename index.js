const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
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
connectDB();

// custom middleware logger
app.use(logger);

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

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB");
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`);
	});
});
