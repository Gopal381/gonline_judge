import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateCodeFile = async (lan, code) => {
  const fileId = uuid();
  const fileName = `${fileId}.${lan}`;
  const filePath = path.join(dirCodes, fileName);
  fs.writeFileSync(filePath, code);
  return filePath;
};

module.exports = { generateCodeFile };
