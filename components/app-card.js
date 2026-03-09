class AppCard extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute("href");
    const logo = this.getAttribute("logo");
    const placeholder = this.getAttribute("placeholder");
    const title = this.getAttribute("title");
    const badge = this.getAttribute("badge");
    const description = this.getAttribute("description");

    this.innerHTML = `
      <a href="${href}" class="app-card">
        <div class="app-visual">
          <img class="app-logo" src="${logo}" alt="${title} logo" />
          <div class="app-logo-placeholder">${placeholder}</div>
        </div>
        <div class="app-body">
          <div class="app-title-row">
            <h3 class="app-title">${title}</h3>
            ${badge ? `<span class="badge">${badge}</span>` : ""}
          </div>
          <p class="app-description">${description}</p>
        </div>
      </a>
    `;

    this._initLogo();
  }

  _initLogo() {
    const logo = this.querySelector(".app-logo");
    const placeholder = this.querySelector(".app-logo-placeholder");

    if (!logo) return;

    logo.addEventListener("load", () => {
      logo.classList.add("show");
      if (placeholder) placeholder.style.display = "none";
    });

    logo.addEventListener("error", () => {
      logo.classList.remove("show");
      if (placeholder) placeholder.style.display = "flex";
    });

    if (logo.complete && logo.naturalWidth > 0) {
      logo.classList.add("show");
      if (placeholder) placeholder.style.display = "none";
    }
  }
}

customElements.define("app-card", AppCard);
