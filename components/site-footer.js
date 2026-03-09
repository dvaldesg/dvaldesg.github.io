class SiteFooter extends HTMLElement {
  connectedCallback() {
    const suffix = this.getAttribute('suffix') || 'Hosted with GitHub Pages';
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-inner">
            © 2026 Diego Valdés · ${suffix}
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
