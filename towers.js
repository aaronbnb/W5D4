const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class HanoiGame {
  constructor() {
    this.towers = [[1,2,3],[],[]]
  }
  run() {
    /*
      displays towers
      prompts for player move
      gets the move
      checks if it a valid move
      moves the disk
      then checks it you've won
      ends game if you have won
    */
  }
  promptMove() {
    console.log(this.towers);
    rl.question('Choose a tower', (answer) => {
      let startTowerIdx = answer;
      console.log(startTowerIdx);
      rl.question('Move where?', (answer2) => {
        let endTowerIdx = answer2;
        console.log(endTowerIdx);
        isValidMove(startTowerIdx, endTowerIdx);
        rl.close();

      })
    })
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startDisk = this.towers[startTowerIdx][0]
    let endDisk = this.towers[endTowerIdx][0]
    if((startDisk > endDisk) || (startDisk == undefined)) {
      console.log("Invalid move");
    } else {
      console.log("valid move");
    }
  }

}

game = new HanoiGame();
game.isValidMove(0, 2);
