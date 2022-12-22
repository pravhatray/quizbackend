const express = require("express");
const questionSchema = require("../Models/question.model");
const formSchema = require("../Models/form.model");
const app = express.Router();

app.get("/", async (req, res) => {
  let question = await questionSchema.find();
  res.send(question);
});

app.get("/filter", async (req, res) => {
  const { amount, difficulty, category, page = 1, limit = 1 } = req.query;
  try {
    const filtered = await questionSchema
      .find({
        amount: amount,
        difficulty: difficulty,
        category: category,
      })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).send(filtered);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});


app.post("/post", async (req, res) => {
  try {
    let formuser = await formSchema.create(req.body);
    res.send({
      token: `${formuser.id}:${formuser.category}:${formuser.difficulty}:${formuser.numberofQuestions}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
