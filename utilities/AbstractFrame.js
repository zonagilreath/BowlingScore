export default class AbstractFrame {
  constructor(frameNum, frames, isActive){
    this.frameNum = frameNum;
    this.frames = frames;
    this.isActive = false;
    this.started = false;
    this.score1 = null;
    this.score2 = null;
    this.score3 = null;
  }

  addScore(score){
    this.started = true;
    if (this.score1 === null) this.score1 = score;
    else if (this.score2 === null) this.score2 = score;
    else this.score3 = score;
  }

  getScore(){
    if (this.frameNum === 10) return this.score1 + this.score2 + this.score3;
    let total = this.score1 + this.score2;
    const nextFrame = this.frames[this.frameNum + 1]
    if (total < 10 || !nextFrame.started){
      return total;
    }
    let next1 = nextFrame.score1;
    let next2 = (nextFrame.score2 !== null) ? nextFrame.score2 : this.frames[this.frameNum + 2].score1;
    return (this.score1 < 10) ? total + next1 : total + next1 + next2;
  }

  getSubTotal(){
    if (this.frameNum === 0){
      return this.score1 + this.score2;
    }else {
      const prevFrame = this.frames[this.frameNum - 1];
      return (prevFrame.subTotal || 0) + this.getScore();
    }
  }
}