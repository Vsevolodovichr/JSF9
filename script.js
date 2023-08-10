//1
const h2s = document.querySelectorAll("h2.head");
for (const h2 of h2s) {
  h2.style.backgroundColor = "green";
}
const inners = h2s.filter(".inner");
for (const inner of inners) {
  inner.style.fontSize = "35px";
}
//2
const as = document.querySelectorAll("a");
for (const a of as) {
  if (a.href.startsWith("https://")) {
    a.target = "_blank";
  }
}
//3
const h3s = document.querySelectorAll("h3");
for (const h3 of h3s) {
  const div = h3.nextSibling;
  if (div && div.tagName === "DIV") {
    h3.parentNode.insertBefore(div, h3);
  }
}
//4
const checkboxes = document.querySelectorAll("input[type=checkbox]");
let checkedCount = 0;
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkedCount++;
    } else {
      checkedCount--;
    }
    if (checkedCount === 3) {
      checkboxes.forEach(checkbox => checkbox.disabled = true);
    }
  });
});
