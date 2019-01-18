function bubbleSort(array) {
  /* your code here */
  if (array.length < 2) {
    return array;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 1; (j = i); j++) {
        if (array[j - 1] > array[i]) {
          let temp = array[j - 1];
          array[j - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  }
  return array;
}
function swap(num1, num2) {
  let arr = [num1, num2];
  if (num2 < num1) {
    arr[(num2, num1)];
  }
  return arr;
}
