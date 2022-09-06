const mongoose = require("mongoose");
// --------- CONNECT WITH MONGODB USE DOTENV
const { LOCAL_APP_HOST, LOCAL_APP_DATABASE } = process.env;
const MONGODB = `mongodb://${LOCAL_APP_HOST}/${LOCAL_APP_DATABASE}`;

mongoose
  .connect(MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,  
  })
  .then((db) => console.log("Connected to Database: " + LOCAL_APP_DATABASE))
  .catch((err) => console.error(err));
