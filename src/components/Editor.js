export default class Editor {
  $editor = null;
  data = null;

  constructor({ $target }) {
    const $editor = document.createElement("form");
    $editor.className = "editor-form";
    this.$editor = $editor;

    const $textArea = document.createElement("textarea");
    $textArea.className = "editor-textarea";
    

    const $postBtn = document.createElement("button");
    $postBtn.className = "editor-post-btn";
    $postBtn.type = "submit";
    $postBtn.textContent = "post";
    
    $postBtn.addEventListener("click", (e) => {
      e.preventDefault();
    })

    this.$editor.appendChild($textArea);
    this.$editor.appendChild($postBtn);
    $target.appendChild(this.$editor);
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    console.log("render");
  }
}