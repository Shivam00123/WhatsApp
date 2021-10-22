import express, { response } from "express";
import Pusher from "pusher";
import mongoose from "mongoose";
import cors from "cors";
import Messages from "./dbModel.js";

const app = express();
const Port = process.env.Port || 8000;

const pusher = new Pusher({
  appId: "1257761",
  key: "b40003835bb3c4b322c7",
  secret: "7f26f0de4c2241f2586d",
  cluster: "ap2",
  useTLS: true,
});

const connection_url =
  "mongodb+srv://shivam:fgBJUX7ZeYagL75D@cluster0.e8c6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());

mongoose.connect(connection_url);

mongoose.connection.once("open", () => {
  console.log("Mongo connected");

  const changeStream = mongoose.connection
    .collection("messagecontents")
    .watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      console.log(change);
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timeStamp: messageDetails.timeStamp,
      });
    } else {
      console.log("bad request");
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/messages/new", (req, res) => {
  const dbMessages = req.body;

  Messages.create(dbMessages, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/fetch", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(Port, () => {
  console.log("Server started at Port http://localhost:" + Port);
});
