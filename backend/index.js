import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
import cors from "cors";

const app = express();
const PORT = 3001;

//mongo connection
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/soccerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTION SUCCESSFUL......."))
  .catch((err) => console.log("ERRRRRRORRRR", err));

//bodyparser Setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS
app.use(cors());

//Routes
routes(app);

app.get("/", (req, res) => {
  res.send("PORT is:" + PORT);
});

app.listen(PORT, () => {
  console.log("Our Socces server is running on PORT: ", PORT);
});
