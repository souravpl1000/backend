const express = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./routes/user.routes");
const { jobRouter } = require("./routes/job.routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.use("/users", userRouter);
app.use("/jobs", jobRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Trouble connecting to the DB");
    console.log(err);
  }
  console.log(`Running at 4500 Port`);
});
