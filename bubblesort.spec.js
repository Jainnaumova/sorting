describe("Bubble Sort", function() {
  let swapCounter,
  beforeEach(() => {
    swapCounter = 0
  });

  let comparisonCounter,
    beforeEach(() => {
      comparisonCounter = 0
  });

  it("handles an empty array", function () {
    expect(swapCounter).toEqual(0)
    expect(comparisonCounter).toEqual(0)
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles an one item array", function() {
    expect(swapCounter).toEqual(0)
    expect(comparisonCounter).toEqual(0)
    expect(bubbleSort([2])).toEqual([2]);
  });

  it("correctly sorts an array", function () {
    expect(swapCounter).toEqual()
    expect(comparisonCounter).toEqual()
    expect(bubbleSort([8, 5, 3, 1, 9])).toEqual([1, 3, 5, 8, 9]);
  });
});

[8, 5, 3, 1, 9]

[5, 8, 3, 1, 9]

[5, 3, 8, 1, 9]



// swapCounter = 2
// comparisonCounter = 2

