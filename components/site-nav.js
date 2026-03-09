class SiteNav extends HTMLElement {
  connectedCallback() {
    const onHome =
      window.location.pathname === "/" ||
      window.location.pathname === "" ||
      window.location.pathname === "/#";
    this.innerHTML = `
      <nav class="site-nav">
        <div class="container">
          <div class="site-nav-inner">
            <div class="site-nav-left">
              <a href="/" class="site-nav-brand">Home</a>
              <a href="/cv/">CV</a>
            </div>
            <div class="site-nav-links">
              ${onHome ? '<a href="#projects">Projects</a>' : ""}
              <a href="https://github.com/dvaldesg" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/diego-valdes-ganga" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("site-nav", SiteNav);
