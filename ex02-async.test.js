const { fetchData } = require("./utils");

test("regular test fn returning promise", () => {
  return fetchData().then((data) => {
    expect(data).toContain("apple");
  });
});

test("async test fn", async () => {
  const data = await fetchData();
  expect(data).toContain("apple");
});
