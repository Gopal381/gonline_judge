import fs from "fs";
import path from "path";
import {v4 as uuid} from uuid;

const dirInput = path.join(__dirname, 'input');

if(!fs.existsSync(dirInput)) {
    fs.mkdirSync(dirInput, {recursive:true});
}

const generateInputFile = async(inp) => {
    const fileId = uuid();
    const inputFilename = `${fileId}.txt`;
    const inputFilepath = path.join(dirInput, inputFilename);
    fs.writeFileSync(inputFilepath, inp);
    return inputFilepath;
};

module.exports = {
    generateInputFile,
};