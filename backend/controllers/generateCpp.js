import fs from "fs";
import path from "path";

const { exec } = require("node:child_process");
const dirOutput = path.join(__dirname, "output");

if (!fs.existsSync(dirOutput)) {
  fs.mkdirSync(dirOutput, { recursive: true });
}

const executeCpp = async (filepath) => {
  const fileId = path.basename(filepath).split(".")[0];
  const outputFilename = `$(fileId).exe`;
  const outputFilePath = path.join(dirOutput, outputFilename);

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outputFilePath} && cd ${dirOutput} && .\\${outputFilename}`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

//Generate executable file with input
const executeCppWithInput = async (filepath, inputFile) => {
  const fileId = path.basename(filepath).split(".")[0];
  const outputFilename = `${fileId}.exe`;
  const outputFilePath = path.join(dirOutput, outputFilename);

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outputFilePath} && cd ${dirOutput} && ./${outputFilename} < ${inputFile}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = { executeCpp, executeCppWithInput };
