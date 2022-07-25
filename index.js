const square = document.querySelector(".progress");
const square1 = document.querySelector(".progress1");
const square2 = document.querySelector(".progress2");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("progress");
      square1.classList.add("progress1");
      square2.classList.add("progress2");

      return;
    }
    square.classList.remove("progress");
    square1.classList.remove("progress1");
    square2.classList.remove("progress2");
  });
});
observer.observe(document.querySelector(".progress1"));
observer.observe(document.querySelector(".progress2"));
observer.observe(document.querySelector(".progress"));

const text = document.querySelector(".slide-right");
const text1 = document.querySelector(".slide-right1");
const text2 = document.querySelector(".slide-right2");

const observer1 = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      text.classList.add("slide-right");
      text1.classList.add("slide-right1");
      text2.classList.add("slide-right2");
      return;
    }
    text.classList.remove("slide-right");
    text1.classList.remove("slide-right1");
    text2.classList.remove("slide-right2");
  });
});
observer1.observe(document.querySelector(".slide-right"));
observer1.observe(document.querySelector(".slide-right1"));
observer1.observe(document.querySelector(".slide-right2"));

let elements = document.querySelectorAll(".rolling-text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

// for presentation purpose
setTimeout(() => {
  elements.forEach((element) => {
    element.classList.add("play");
  });
}, 600);

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});
