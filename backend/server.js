import express from "express";
import router from "./routes/user.js";
import bodyParser from "body-parser";
import DBConnection from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
DBConnection();
// parse application/json
app.use(bodyParser.json());

app.use("/api", router);

app.listen(8000, () => {
  console.log("Server is listening on port 8000!");
});
