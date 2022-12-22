const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ["General Knowledge", "Sports", "Mythology"],
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "hard", "medium"],
  },
  numberofQuestions: { type: Number, default: 5, enum: [3, 5, 10] },
});

const Form = mongoose.model("form", formSchema);

module.exports = Form;
