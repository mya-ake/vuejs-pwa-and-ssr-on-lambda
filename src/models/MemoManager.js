export default class MemoManager {
  constructor({ memos, idCounter }) {
    this.memos = memos || [];
    this.idCounter = idCounter || this.memos.length;
  }

  push(memo) {
    this.memos.push(memo);
  }

  getNextId() {
    this.idCounter = this.idCounter + 1;
    return this.idCounter;
  }
}
