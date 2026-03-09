class PageHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="hero">
        <div class="container">
          <div class="hero-inner">
            <div class="eyebrow">Software Engineer · Santiago, Chile</div>
            <h1>Diego Valdés.</h1>
            <p>
              Industrial Engineer with a diploma in Computer Science from PUC
              Chile. Two years of experience building software products, currently
              working at Vambe as a product-focused engineer leading mobile
              development, working with Meta APIs and Business Manager, and
              enhancing executive assignment features for clients on the platform.
            </p>
            <div class="top-actions">
              <a class="button primary" href="https://github.com/dvaldesg" target="_blank" rel="noopener">GitHub</a>
              <a class="button" href="https://linkedin.com/in/diego-valdes-ganga" target="_blank" rel="noopener">LinkedIn</a>
              <a class="button" href="https://instagram.com/dvaldesg" target="_blank" rel="noopener">Instagram</a>
            </div>
            <p class="hero-note">
              This is a vibecoded site, mostly here to host privacy policies and
              terms for my iOS apps. Feel free to reach out on
              <a href="https://linkedin.com/in/diego-valdes-ganga" target="_blank" rel="noopener">LinkedIn</a>
              or
              <a href="https://instagram.com/dvaldesg" target="_blank" rel="noopener">Instagram</a>.
            </p>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("page-hero", PageHero);
