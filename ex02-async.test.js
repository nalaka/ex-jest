const fetchData = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(["apple", "orange"]);
    }, 200);
  });
};

test("regular test fn returning promise", () => {
  return fetchData().then((data) => {
    expect(data).toContain("apple");
  });
});

test("async test fn", async () => {
  const data = await fetchData();
  expect(data).toContain("apple");
});
