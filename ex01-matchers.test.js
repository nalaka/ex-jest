test("calling matchers on an 'expectation object'", () => {
  expect(1 + 2).toBe(3);
});

test("opposite of any matcher", () => {
  expect(1 + 2).not.toBe(4);
});

test("truthiness", () => {
  let x;
  expect(x).toBeUndefined();

  x = null;
  expect(x).toBeNull();

  x = 42;
  expect(x).toBeDefined();

  expect(x).toBeTruthy();

  [false, NaN, 0, "", null, undefined].forEach((x) => {
    expect(x).toBeFalsy();
  });
});

test("numbers", () => {
  expect(3).toEqual(3.0);
  expect(0.1 + 0.2).not.toBe(0.3); // Rounding errors
  expect(0.1 + 0.2).toBeCloseTo(0.3);

  expect(3).toBeGreaterThan(2);
  expect(3).toBeGreaterThanOrEqual(2.9);
  expect(3).toBeLessThan(4);
  expect(3).toBeLessThanOrEqual(3);
});

test("strings", () => {
  expect("bar").toMatch(/bA/i);
});

test("arrays/iterabls", () => {
  expect([2, 3, 4, 5]).toContain(3);
});

test("exceptions", () => {
  expect(() => {
    throw Error("oops");
  }).toThrow("oops");
});
