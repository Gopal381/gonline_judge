import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AddProblemModal from "../AddProblemModal";
import {
  addOneProblem,
  removeOneProblem,
} from "../../Redux/Features/Problems/singleProblemSlice";
import { useSelector } from "react-redux";

const ProblemCard = ({ problem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [problems, setProblems] = useState([
    {
      problemName: "",
      problemDescription: "",
      constraints: "",
      inputDescription: "",
      outputDescription: "",
      code: "",
    },
  ]);
  const closeModal = () => {
    dispatch(removeOneProblem());
    setIsModalOpen(false);
  };
  console.log("problem lis ", problem);
  const editHandle = () => {
    setIsModalOpen(true);
    dispatch(addOneProblem(problem));
  };
  const handleAddProblem = (problem) => {
    dispatch(removeOneProblem());
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 bg-gray-800 rounded shadow-md">
        <h2 className="text-xl font-bold text-white">{problem.problemName}</h2>
        <p className="text-gray-300">{problem.problemDescription}</p>
        <div className="flex justify-end mt-4 space-x-3">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
            onClick={editHandle}
          >
            Edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            onClick={() => deleteProblemHandler(problem._id)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
            onClick={() => onVisit(problem)}
          >
            Visit
          </button>
        </div>
      </div>
      <AddProblemModal
        isOpen={isModalOpen}
        onClose={() => closeModal()}
        onSubmit={handleAddProblem}
        flag={false} // Indicating edit mode
      />
    </>
  );
};

const ProblemList = ({ problem }) => {
  if (problem.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4 bg-gray-800 rounded shadow-md text-center">
        <h2 className="text-xl font-bold text-white">No Problems Available</h2>
        <p className="text-gray-400">Add a new problem to get started.</p>
      </div>
    );
  }
  return (
    <ul className="space-y-4">
      {problem?.map((problem, index) => (
        <ProblemCard problem={problem} key={index} />
      ))}
    </ul>
  );
};

export default ProblemList;
