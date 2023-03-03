export function main() {
  jumps();
  accordian();
}

function jumps() {
  console.log("jumpers be jumpin");

  const abt = document.getElementById("abt");
  const wrk = document.getElementById("wrk");
  const top = document.getElementById("top");
  const About = document.getElementById("About");
  const Work = document.getElementById("Work");

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
