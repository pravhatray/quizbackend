const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
   
    category:{ type: String, required: true,enum:["General Knowledge","Sports","Mythology"] },
    type: { type: String, required: true},
    difficulty: { type: String, required: true ,enum:["easy","hard","medium"]},
    numberofQuestions:{ type: Number, default:5,enum:[3,5,10]},
    question:  { type: String, required: true },
    correct_answer:  { type: String, required:true},
    incorrect_answers: [
      { type: String, required: true },
    ]
  }
);

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
