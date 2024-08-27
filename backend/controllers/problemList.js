import problemList from "../models/problem";
import users from "../models/user";

const problemList = async (req, res) => {
  try {
    const allProblems = await problemList.find({});
    if (!allProblems) {
      return res
        .status(200)
        .json({ success: false, message: "Problems Not Found at Server." });
    }
    return res.json({
      success: true,
      message: "fetched all problem successfully",
      allProblems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error in Fetching Problems : ${error.message}`,
    });
  }
};

const getProblemById = async (req, res) => {
  try {
    const { problemId } = req.body;
    console.log(problemId);
    const getProblem = await problemList
      .findById(problemId)
      .populate("testCases")
      .exec();
    if (!getProblem) {
      throw new Error("Unable to fetch problem by Id from database");
    }

    return res.status(200).json({ success: true, getProblem });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const addProblems = async (req, res) => {
  try {
    const {
      problemName,
      problemDescription,
      constraints,
      inputDescription,
      outputDescription,
      code,
    } = req.body;
    const coderId = req.user.id;

    // console.log(req.body);

    if (
      !problemName ||
      !problemDescription ||
      !constraints ||
      !inputDescription ||
      !outputDescription ||
      !code
    ) {
      console.log(
        problemName,
        problemDescription,
        constraints,
        inputDescription,
        outputDescription,
        sampleOutput,
        code
      );
      return res
        .status(404)
        .json({ success: false, message: "Cannot fetch data from body" });
    }

    const problem = await problemList.create({
      problemName,
      problemDescription,
      constraints,
      inputDescription,
      outputDescription,
      code,
    });

    const userDetails = await users.findByIdAndUpdate(
      { _id: coderId },
      {
        $push: {
          problemsCreated: problem._id,
        },
      },
      {
        new: true,
      }
    );

    console.log(userDetails);

    return res.status(200).json({
      success: true,
      message: "Problem added successfully",
      problem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error in Fetching Problems : ${error.message}`,
    });
  }
};

export { problemList, getProblemById, addProblems, problem, userDetails };
