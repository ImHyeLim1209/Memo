export default class Memo {
  $memo = null;
  data = null;
  constructor({$target}) {
    const $memo = document.createElement("div");
    $memo.className = "Memo";

    this.$memo = $memo;
    $target.appendChild($memo);
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.$Memo.textContent = this.data;
  }
}