class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="site-nav">
        <div class="container">
          <div class="site-nav-inner">
            <div class="site-nav-left">
              <a href="/home/" class="site-nav-brand">Home</a>
              <a href="/cv/">CV</a>
            </div>
            <div class="site-nav-links">
              <div class="nav-dropdown">
                <a href="/home/#projects" class="nav-dropdown-trigger">Projects</a>
                <div class="nav-dropdown-menu">
                  <a href="/remindy/">
                    <img src="/assets/remindy-app-logo.png" alt="" class="nav-dropdown-icon" />
                    Remindy
                  </a>
                </div>
              </div>
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
