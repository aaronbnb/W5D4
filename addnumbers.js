const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    rl.question('pick a number', (response) => {
      answer = parseInt(response);
      console.log(`sum: ${sum += answer}`);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    })
  } else {
    rl.close();
    completionCallback(sum);
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
