import * as fs from "fs";
const path = require("path");

export default class DirectoryUtil {
  public static makeDirectoryUtil(outputFilePath: string) {
    let dirPath: string = "";
    outputFilePath.split("/").forEach((dirName) => {
      dirPath = path.join(dirPath, dirName);
      console.log(`dirPath: ${dirPath}`);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });
  }
}
