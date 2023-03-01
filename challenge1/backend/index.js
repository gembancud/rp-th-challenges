import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 5000;

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("Counter", CounterSchema);

app.use(cors());

app.get("/", async (req, res) => {
  // get counter from collection counter
  const counter = await Counter.findOne();
  if (!counter) {
    const newCounter = new Counter({ count: 0 });
    await newCounter.save();
    res.json(newCounter);
  } else {
    res.json(counter);
  }
});

app.post("/", async (req, res) => {
  // add counter +1 to collection counter
  const counter = await Counter.findOne();
  counter.count = counter.count + 1;
  const new_counter = await counter.save();
  res.json(new_counter);
});

app.delete("/", async (req, res) => {
  Counter.deleteOne().exec();
  const counter = await new Counter({ count: 0 }).save();
  res.json(counter);
});

const start = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://root:example@mongodb:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "counterdb",
    });
    app.listen(port, () => {
      console.log(`Backend istening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
