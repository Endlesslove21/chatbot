import express from "express";

import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config;

let app = express();

//config the engine
viewEngine(app);

//parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init webroutes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Chat bot đang chạy ở port ", port);
});
