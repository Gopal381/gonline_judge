import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  problemname: {
    type: String,
    required: true,
  },

  problemdescription: {
    type: String,
    required: true,
  },

  constraints: {
    type: String,
    required: true,
  },

  inputDescription: {
    type: String,
    required: true,
  },

  outputDescription: {
    type: String,
    required: true,
  },

  testCases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Testcases",
    },
  ],

  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("problemList", problemSchema);
