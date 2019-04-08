const checkBoxes = document.querySelectorAll(".checkbox");

for (const checkBox of checkBoxes) {
  checkBox.addEventListener("click", e => {
    let [check] = checkBox.children;
    if (checkBox.classList.contains("isChecked")) {
      check.style.opacity = 0;
      checkBox.classList.remove("isChecked");
    } else {
      check.style.opacity = "1.0";
      checkBox.classList.add("isChecked");
    }
  });
}
