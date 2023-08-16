const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());


// mongoose.connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log("DB Connected")
// });

const connectionUrl = "mongodb://127.0.0.1:27017/netflix"; // Adjust your database name
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// mongoose.connect(connectionUrl, options)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });


// app.use("/api/user", userRoutes);

// app.listen(5000, console.log("server started"));

mongoose.connect(connectionUrl, options)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/user", userRoutes);
