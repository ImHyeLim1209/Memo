import Editor from "./Editor.js";
export default class App {
  $target = null;
  data = [];
  constructor($target) {
    this.$target = $target;

    this.editor = new Editor({$target});
  }
}