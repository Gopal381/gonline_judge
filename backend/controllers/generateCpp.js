import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { exec } from "node:child_process";
const dirOutput = path.join(__dirname, "output");

const executeCpp = async (filepath) => {
  if (!fs.existsSync(dirOutput)) {
    fs.mkdirSync(dirOutput, { recursive: true });
  }
  const fileId = path.basename(filepath).split(".")[0];
  const outputFilename = `${fileId}.exe`;
  const outputFilePath = path.join(dirOutput, outputFilename);

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outputFilePath} && cd ${dirOutput} && .\\${outputFilename} `,
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

//Generate executable file with input
const executeCppWithInput = async (filepath, inputFile) => {
  if (!fs.existsSync(dirOutput)) {
    fs.mkdirSync(dirOutput, { recursive: true });
  }
  const fileId = path.basename(filepath).split(".")[0];
  const outputFilename = `${fileId}.exe`;
  const outputFilePath = path.join(dirOutput, outputFilename);

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outputFilePath} && cd ${dirOutput} && .\\${outputFilename} < ${inputFile}`,
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

export { executeCpp, executeCppWithInput };
