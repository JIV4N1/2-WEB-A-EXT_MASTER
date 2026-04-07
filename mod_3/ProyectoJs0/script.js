const form = document.getElementById("comment-form");
const textarea = document.getElementById("comment");
const commentsList = document.getElementById("comments-list");

function createCommentElement(text) {
  const li = document.createElement("li");
  li.className = "comment-item";

  const content = document.createElement("div");
  content.className = "comment-content";

  const p = document.createElement("p");
  p.textContent = text;

  const time = document.createElement("small");
  time.className = "comment-time";
  time.textContent = new Date().toLocaleString();

  const actions = document.createElement("div");
  actions.className = "comment-actions";

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "btn-delete";
  delBtn.textContent = "Eliminar";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  content.appendChild(p);
  content.appendChild(time);
  actions.appendChild(delBtn);

  li.appendChild(content);
  li.appendChild(actions);

  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = textarea.value.trim();
  if (value === "") return;

  const commentEl = createCommentElement(value);
  commentsList.prepend(commentEl);

  textarea.value = "";
  textarea.focus();
});

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    form.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true }),
    );
  }
});
