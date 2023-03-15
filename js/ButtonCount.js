class ButtonCount extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const btn = document.createElement("button");
    btn.textContent = "Times Clicked: ";
    let clicks = 0;

    btn.addEventListener("click", () => {
      clicks++;
      btn.textContent = "Times Clicked: " + clicks;
    });

    shadow.appendChild(btn);
  }
}

customElements.define("button-count", ButtonCount);
