const express = require("express");
const Router = require("./routes/routes");
const connectDB = require("./db/connect");
// const cors = require('cors')
require("dotenv").config();

const app = express();

// app.use(cors());

app.use(express.static('../front/build'))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/", Router);

app.listen(5000, async () => {
  try {
    const result = await connectDB(process.env.MONGO_URI);
    console.log("Listening to port 5000...");
  } catch (err) {
    console.log("error connecting");
  }
});