import testcases from "../models/testcase";
import problemList from "../models/problem";
const addTestcases = async (req, res) => {
  const { input, output, problemId } = req.body;
  try {
    const testCase = await testcases.create({ input, output, problemId });
    const problem = await problemList
      .findByIdAndUpdate(
        { _id: problemId },
        {
          $push: {
            Testcases: testCase._id,
          },
        },
        {
          new: true,
        }
      )
      .populate("Testcases")
      .exec();

    return res.json({
      success: true,
      input,
      output,
      problem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const removeTestcase = async (req, res) => {
  try {
    const element = req.body;
    const testCaseDetails = await TestCaseSchema.findByIdAndDelete({
      _id: element._id,
    });
    const problemDetails = await problemSchema
      .findByIdAndUpdate(
        { _id: element.problemId },
        {
          $pull: {
            TestCases: element._id,
          },
        },
        {
          new: true,
        }
      )
      .populate("TestCases")
      .exec();

    return res.status(500).json({ success: true, problemDetails });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { addTestcases, removeTestcase };
