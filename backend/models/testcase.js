import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },

  output: {
    type: String,
    required: true,
  },

  problemId: {
    type: mongooses.Schema.Types.ObjectId,
    ref: "problemList",
  },
});

module.exports = mongoose.model("Testcases", testCaseSchema);
