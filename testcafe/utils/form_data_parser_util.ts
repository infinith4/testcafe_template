export default class FormDataParserUtil {
  public static parseJsonInWebKitFormBoundary(bodyData: string): object {
    let splitedBody: string[] = bodyData.split("\n");
    // const foundJsonString: string[] = splitedBody.find(
    //   (s) => s.startsWith(`[{"`) && s.endsWith(`"}]`)
    // );
    const foundJsonString: string = splitedBody.find((s) =>
      s.startsWith(`[{"`)
    )!;

    return JSON.parse(foundJsonString);
  }
}
