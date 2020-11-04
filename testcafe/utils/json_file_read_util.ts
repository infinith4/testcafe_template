import { resolveModuleName } from "typescript";

const fs = require("fs");
const { promisify } = require("util");
export default class JsonFileReadUtil {
  public static async readJsonFile(jsonFilePath: string): Promise<any> {
    console.log(jsonFilePath);
    const result = await promisify(fs.readFile)(jsonFilePath);
    let jsonStr = Buffer.from(result).toString();
    return await JSON.parse(jsonStr);
  }
}
