
const userRouter = require('./routers/users');

const express = require("express");
const cors = require("cors");

const logRoutes = require("./middleware/logger");
const diaryRouter = require("./routers/diary");


const api = express();


api.use(cors());
api.use(express.json());
api.use(logRoutes);



api.get("/", (req, res) => {
  res.json({
    name: "Discretion",
    description: "Send and receive private messages.",
  });
});

api.use("/users", userRouter);
api.use("/diary", diaryRouter);

module.exports = api;
