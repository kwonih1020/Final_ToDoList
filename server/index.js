const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + "/db.json"));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + "/../build/"),
});

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rad572985:xofbsdlajsl1!@cluster0.zzh6w.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("db connection Failed");
});

db.once("open", () => {
  console.log("db,Connected!");
});
