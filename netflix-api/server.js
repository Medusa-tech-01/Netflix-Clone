// sets up a basic express server with MongoDB using Mongoose
const express = require("express")  //create the server
const cors = require("cors") // allowing the server to accept requests from different origins.
const mongoose = require("mongoose") // providing a schema-based solution for modeling application data.
const userRoutes = require("./routes/UserRoutes");

const app = express();

// The app.use() function adds a new middleware to the app
app.use(cors());
app.use(express.json());

// connect with mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/netflix")
  .then(()=>{
    console.log("DB Connection Successful")
  })
  .catch((err)=>{
    console.log(err.message)
  });

  app.use("/api/user", userRoutes);

  app.listen(5000, () => {
    console.log("server started on port 5000");
  });