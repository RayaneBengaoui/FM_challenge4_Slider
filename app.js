let slideIndex = 1;

let texts = document.querySelectorAll(".text");
let images = document.querySelectorAll(".people-img");
let leftBtn = document.querySelector("#left-button");
let rightBtn = document.querySelector("#right-button");

leftBtn.addEventListener("click", () => {
  showDivs((slideIndex -= 1));
});
rightBtn.addEventListener("click", () => {
  showDivs((slideIndex += 1));
});

function removeInactive() {
  texts[slideIndex - 1].classList.remove("inactive");
  images[slideIndex - 1].classList.remove("inactive");
}

function showDivs(n) {
  if (n > texts.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = texts.length;
  }
  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.add("inactive");
    images[i].classList.add("inactive");
  }

  setTimeout(removeInactive, 500);
}
