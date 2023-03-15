export function main() {
  jumps();
  accordian();
  nextSlide();
}

function jumps() {
  console.log("jumpers be jumpin");

  const abt = document.getElementById("abt");
  const wrk = document.getElementById("wrk");
  const top = document.getElementById("top");
  const About = document.getElementById("About");
  const Work = document.getElementById("Work");
  const totop = document.getElementById("totop");

  abt.addEventListener("click", () => {
    About.scrollIntoView();
  });

  wrk.addEventListener("click", () => {
    Work.scrollIntoView();
  });

  top.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  totop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

function accordian() {
  console.log("according?");
  const accordian = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

let slideIndex = [1, 1];
let slideId = ["experience", "project"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function nextSlide() {
  const prev = document.getElementsByClassName("prev");
  const next = document.getElementsByClassName("next");

  for (let i = 0; i < 2; i++) {
    prev[i].addEventListener("click", () => {
      plusSlides(-1, i);
    });
    next[i].addEventListener("click", () => {
      plusSlides(1, i);
    });
  }
}

function showSlides(n, no) {
  let i;
  const x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
