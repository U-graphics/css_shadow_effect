let insert = document.getElementById('insert');
let item = document.getElementById('item');
window.onload = insert.addEventListener("keyup", function() {
  item.setAttribute("content", insert.value);
});
