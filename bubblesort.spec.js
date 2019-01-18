describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function() {
  it("handles an one item array", function() {
    expect(bubbleSort([2])).toEqual([2]);
  });
});

describe("Bubble Sort", function() {
  it("correctly sorts an array", function() {
    expect(bubbleSort([8, 5, 3, 1, 9])).toEqual([1, 3, 5, 8, 9]);
  });
});
