const createMapIdIndex = (memos) => {
  const map = {};
  memos.forEach((memo, index) => {
    map[memo.id] = index;
  });
  return map;
};

export default class MemoManager {
  constructor({ memos, idCounter }) {
    this.memos = memos || [];
    this.mapIdIndex = createMapIdIndex(this.memos);
    this.idCounter = idCounter || this.memos.length;
  }

  push(memo) {
    this.mapIdIndex[memo.id] = this.memos.length;
    this.memos.push(memo);
  }

  update(memo) {
    const index = this.mapIdIndex[memo.id];
    this.memos[index] = memo;
  }

  get(id) {
    return this.memos[this.mapIdIndex[id]];
  }

  getNextId() {
    this.idCounter = this.idCounter + 1;
    return this.idCounter;
  }
}
