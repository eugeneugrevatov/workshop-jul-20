import Driver from "../../test/driver";

export default class CommentDriver extends Driver {
  get = {
    text: () =>
      this.getById("comment-text")
        .at(0)
        .text(),
    user: () =>
      this.getById("comment-user")
        .at(0)
        .text()
  };
}
