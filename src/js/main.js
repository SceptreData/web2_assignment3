window.addEventListener("DOMContentLoaded", function(event) {
  const menu = document.querySelector("#mobile-menu");
  const menuButton = document.querySelector("#menu-icon");

  let isOpen = false;

  menuButton.addEventListener("click", () => {
    console.log("click");
    if (isOpen) {
      TweenMax.to(menu, 0.6, { left: "-100vw", ease: Power3.easeIn });
    } else {
      TweenMax.to(menu, 0.4, { left: 0, ease: Power3.easeOut });
    }
    isOpen = !isOpen;
  });

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
});
