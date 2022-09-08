const $ = document;
// select elements
const input = $.querySelector(".input");
const addTodoButton = $.querySelector(".btn");
const ul = $.querySelector(".todos");
const item = $.querySelector(".todo-item");

// calculate length of input text
function inputLength() {
  return input.value.length;
}

function createListItem() {
  const li = $.createElement("li"); // create element li (list item)

  li.appendChild($.createTextNode(input.value)); // make li text from input value

  ul.appendChild(li); // add li to ul

  input.value = ""; // reset input text

  // START ADD DELETE BUTTON
  const deleteBtn = $.createElement("button");
  deleteBtn.appendChild($.createTextNode("X"));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  // START STRIKETHROUGH
  // because it's in the function only adds it for new items
  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);
  // END STRIKETHROUGH

  // Delete li from ul
  function deleteListItem(e) {
    e.target.parentElement.remove();
  }
  //  End item delete
}

function addListItemAfterClick() {
  if (inputLength() > 0) {
    // make sure that an empty input field doesn't create a li
    createListItem();
  }
}
function addListItemAfterKeyPress(event) {
  // ensure when hit the 'enter' key add a li
  if (inputLength() > 0 && event.key === "Enter") {
    createListItem();
  }
}

addTodoButton.addEventListener("click", addListItemAfterClick);
input.addEventListener("keydown", addListItemAfterKeyPress);
