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
