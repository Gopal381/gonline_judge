import { generateCodeFile } from "./generateCodeFile.js";
import { executeCpp, executeCppWithInput } from "./generateCpp.js";
import { generateInputFile } from "./generateInputFile.js";
import problemList from "../models/problem.js";
import users from "../models/user.js";
import mongoose from "mongoose";

const runCode = async (req, res) => {
  const { lang, code, inputs, problemId } = req.body;

  if (code === undefined) {
    return res.status(500).json({
      success: false,
      message: "Empty code body !",
    });
  }
  try {
    const inputFile = await generateInputFile(inputs);
    const filePath = await generateCodeFile(lang, code);
    const problem = await problemList
      .findById({ _id: problemId })
      .populate("testCases")
      .exec();
    const actualCode = problem.code;
    const filePath2 = await generateCodeFile("cpp", actualCode);
    const output2 = await executeCppWithInput(filePath2, inputFile);

    var output = await executeCppWithInput(filePath, inputFile);

    if (output !== output2) {
      return res.status(200).json({
        success: false,
        output,
        output2,
        Verdict: "failed",
      });
    }
    return res.status(200).json({
      success: true,
      output,
      output2,
      Verdict: "Accepted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error : " + error.message,
    });
  }
};
const submitCode = async (req, res) => {
  const { lang, code, problemId, userId } = req.body;

  try {
    const problemDetails = await problemList
      .findById({ _id: problemId })
      .populate("testCases")
      .exec();

    if (!problemDetails) {
      res.status(500).json({
        success: false,
        message: "Server Not found question details",
      });
    }
    const filePath = await generateCodeFile(lang, code);
    for (let i = 0; i < problemDetails.testCases.length; i++) {
      const testCase = problemDetails.testCases[i];
      const inputFile = await generateInputFile(testCase.inputs);
      const output = await executeCppWithInput(filePath, inputFile);
      if (output !== testCase.output) {
        return res.status(500).json({
          success: false,
          output,
          testCase,
          Verdict: "failed",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error : " + error.message,
    });
  }
};

const runCodePlayground = async (req, res) => {
  const { lan, code } = req.body;
  console.log("Language:", lan);
  console.log("Code:", code);

  try {
    const filePath = await generateCodeFile(lan, code);

    // Compile and run the code
    var output = await executeCpp(filePath);

    // Log the output
    // console.log("Execution Output:", output);

    // Return the result to the frontend
    return res.json({
      success: true,
      message: output,
    });
  } catch (error) {
    console.log("Error:", error); // Log the error for debugging
    return res.json({
      success: false,
      message: "Error: " + error,
    });
  }
};

const runCodePlaygroundInput = async (req, res) => {
  const { lan, code, input } = req.body;
  if (!input) {
    res.json({
      success: false,
      message: "Input is Required !",
    });
  }
  try {
    const filePath = await generateCodeFile(lan, code);
    const inputFile = await generateInputFile(input);
    var output = await executeCppWithInput(filePath, inputFile);
    return res.json({
      success: true,
      output,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error: " + error.message,
    });
  }
};
export { runCode, submitCode, runCodePlayground, runCodePlaygroundInput };
