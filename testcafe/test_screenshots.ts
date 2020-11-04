fixture`My fixture`.page`http://devexpress.github.io/testcafe/example/`;

//npx testcafe chrome testcafe/test_screenshots.ts
test("Take a screenshot of a fieldset", async (t) => {
  await t.expect(false).ok();
  await t.takeScreenshot();
});
