const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const adminRoute = require("./routes/adminRouter");
const employeeRoute = require('./routes/employeeRouter');
const { addGame } = require("./controllers/publisherController");
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoute);
app.use("/employee",employeeRoute)
app.use("/game",addGame)

// mongoose connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
  });

app.listen(port, () => {
  console.log(`server running on port : http://localhost:${port}`);
});
