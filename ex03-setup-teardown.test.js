/**
 * Tests in the same file (a test suite) run sequentially.
 * Test suites run in parallel.
 */

let data = null;

beforeAll(() => console.log("beforeAll at module level"));
beforeAll(async () => {
  const { fetchData } = require("./utils");

  console.log("second beforeAll at module level - waits for an async activity");
  data = await fetchData();
  console.log("second beforeAll at module level - async activity completed");
});

afterAll(() => console.log("afterAll at module level"));

beforeEach(() => console.log("beforeEach at module level"));
afterEach(() => console.log("afterEach at module level"));

test("first test", () => {
  console.log("first test at module level");
});
test("second test", () => {
  console.log("second test at module level");
});

describe("a test group", () => {
  console.log("The test block handles are executed before any of the tests");

  beforeAll(() => console.log("beforeAll in the test group"));
  afterAll(() => console.log("afterAll in the test group"));
  beforeEach(() => console.log("beforeEach in the test group"));
  afterEach(() => console.log("afterEach in the test group"));

  // Module beforeEach > Test group beforeEach
  test("first test in test group", () => {
    console.log("first test  in test group");
  });
  test("second test in test group", () => {
    console.log("second test in test group");
  });
});
