const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr)
    }
  }

  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} > ${el2}? (yes or no)`, (res) => {
    const answer = (res === 'yes' ? true : false);
    callback(answer);
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log(arr);
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i+1, false, outerBubbleSortLoop)
      }
    });
  } else if ((i == arr.length - 1) && madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
  } else {
    outerBubbleSortLoop(false);
  }
}

absurdBubbleSort([3, 2, 1, 7, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});
