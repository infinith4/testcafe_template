import createTestCafe from "testcafe";
import { formatToTimeZone } from "date-fns-timezone";
import path from "path";
const fs = require("fs");
import Log4js from "log4js";
Log4js.configure("log-config.json");
const logger: Log4js.Logger = Log4js.getLogger("app");

//https://stackoverflow.com/questions/58572306/how-to-run-testcafe-runner-class-with-docker
//https://engineer.blog.lancers.jp/2017/07/testcafe_with_browserstack/
(async () => {
  try {
    const testcafe = await createTestCafe("localhost");
    const originalReportsDirName = "reports";
    //NOTE: rename reports
    const dateTimeNow: Date = new Date();
    const dateTimeFormat: string = "YYYY-MM-DD_HH-mm-ss";
    const formattedDateTimeNow: string = formatToTimeZone(
      dateTimeNow,
      dateTimeFormat,
      { timeZone: "Asia/Tokyo" }
    );
    const dateTimeStr: string = `${formattedDateTimeNow}`;

    fs.copyFile(
      originalReportsDirName,
      `${originalReportsDirName}_${dateTimeStr}`,
      function (err: any) {
        if (err != null) {
          logger.info(`${err}`);
        }
      }
    );

    const originalScreenshotsDirName = "screenshots";
    fs.copyFile(
      originalScreenshotsDirName,
      `${originalScreenshotsDirName}_${dateTimeStr}`,
      function (err: any) {
        if (err != null) {
          logger.info(`${err}`);
        }
      }
    );

    const originalLogDirName = "log";
    fs.copyFile(
      originalLogDirName,
      `${originalLogDirName}_${dateTimeStr}`,
      function (err: any) {
        if (err != null) {
          logger.info(`${err}`);
        }
      }
    );

    const reporterSetting: any = [
      {
        name: "json",
        output: "reports/report.json",
      },
      {
        name: "spec",
        output: "reports/report.spec",
      },
    ];
    const testDirPath: string = "testcafe/tests_digital-camera_halfsize";

    const testsFileNameList: string[] = [
      // "add_some_articles_spec.ts",
      // "check_existing_all_articles_spec.ts",
      //"check_put_stamp_spec.ts",
      // "check_square_article.ts",
      //"check_vertical_images_spec.ts",
      "check_wom.ts",
      // "reedit_from_cart_spec.ts",
      //"save_data_to_restore_from_editing_list_spec.ts",
    ];

    let testsFilePathList: string[] = [];
    for (let i = 0; i < testsFileNameList.length; i++) {
      testsFilePathList.push(path.join(testDirPath, testsFileNameList[i]));
    }

    const failedCount = await testcafe
      .createRunner()
      .src(testsFilePathList)
      .browsers(["chrome"]) //["chrome", "edge", "ie"]
      .reporter(reporterSetting)
      .run();

    testcafe.close();
    const exitCode = failedCount ? 1 : 0;

    process.exit(exitCode);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
