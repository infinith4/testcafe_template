import * as fs from "fs";
import fetch from "node-fetch";
import { resolve } from "path";
import DirectoryUtil from "./directory_util";

export default class FileDownloadUtil {
  public static async asyncDownloadForBinaryData(
    url: string,
    outputDirPath: string,
    outputFileName: string
  ) {
    const outputFilePath: string = `${outputDirPath}/${outputFileName}`;
    console.log(`start download: ${url}; ${outputFilePath}`);
    DirectoryUtil.makeDirectoryUtil(outputDirPath);
    await fetch(url, { method: "GET" })
      .then((response: any) => {
        console.log(`request OK: start write to ${outputFilePath}`);
        response.body.pipe(fs.createWriteStream(outputFilePath));
        resolve();
      })
      .catch((error: any) => console.log(`error:${url} ${error}`));
  }
}
