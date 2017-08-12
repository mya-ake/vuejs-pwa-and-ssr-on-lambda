export default class Memo {
  constructor({ id, title, body }) {
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static createNew() {
    return new Memo({
      title: '',
      body: '',
    });
  }
}
