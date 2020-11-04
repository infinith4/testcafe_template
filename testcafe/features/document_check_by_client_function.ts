import { ClientFunction } from "testcafe";
import "colorts/lib/string";

export default class DocumentCheckByClientFunction {
  static getPageTitle: ClientFunction = ClientFunction(() => document.title);

  static getPageTitleWithConsoleLog: ClientFunction = ClientFunction(() => {
    console.log("document.title(in getPageTitle): " + document.title);
    return document.title;
  });

  static getLocation: ClientFunction = ClientFunction(
    () => document.location.href
  );

  //https://www.366service.com/jp/qa/44b41a59dac90a60fe10a0f125799e53
  static getResponseDataForRequestUrl = ClientFunction((req) => {
    return new Promise((resolve, rejects) => {
      const waitForStatus = () => {
        const arrayFromResponse = JSON.parse(req.response.body);
        const responseStatus = arrayFromResponse.status;
        if (responseStatus == "READY") {
          resolve(responseStatus);
        } else {
          waitForStatus();
        }
      };
      waitForStatus();
    });
  });
}
