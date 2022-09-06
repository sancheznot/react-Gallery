const express = require("express");
const cors =  require("cors");
const fileUpload = require("express-fileupload")
const app = express();

// SETTINS
app.set("port", process.env.PORT || 4000);

// ----------------- MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    tempFileDir: "./temp"
}));
// ----------------- ROUTES
app.use("/api", require("./routes/index.routes"));
app.use("/api/images", require("./routes/gallery.routes"));


module.exports = app;
