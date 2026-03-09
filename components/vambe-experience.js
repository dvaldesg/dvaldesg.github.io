const externalLinkIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2.5"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
`;

const backendIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
    <line x1="7" y1="17" x2="7.01" y2="17" />
  </svg>
`;

const frontendIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="18" x2="12" y2="20" />
  </svg>
`;

const mobileIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
`;

class VambeExperience extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-company">
              Vambe
              <a href="https://vambe.ai/" target="_blank" rel="noopener"
                class="ext-link" aria-label="Open Vambe website">
                ${externalLinkIcon}
              </a>
            </div>
            <div class="exp-role">Software Engineer · Product</div>
          </div>
        </div>
        <p class="exp-description">
          Startup focused on sales automation through an optimized pipeline
          powered by customized AI agents that know your customer profile, your
          agenda, your products, and can use tools, all tied together with custom
          automations. I work across the full product, owning the mobile app,
          improving executive tooling, and integrating deeply with WhatsApp and
          Meta's business stack.
        </p>
        <div class="stack-section" aria-label="Current stack at Vambe">
          <div class="stack-label">Stack</div>
          <div class="pill-row">
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${backendIcon}</span>
              NestJS + BullMQ
            </span>
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${frontendIcon}</span>
              Next.js + Tailwind
            </span>
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${mobileIcon}</span>
              Expo SDK + React Native
            </span>
          </div>
        </div>
        <div class="feature-grid">
          <article class="feature-item">
            <div class="feature-item-head">
              <h3>Mobile App</h3>
              <a href="https://apps.apple.com/cl/app/vambe/id6738705292"
                target="_blank" rel="noopener" class="ext-link"
                aria-label="Open Vambe mobile app on the App Store">
                ${externalLinkIcon}
              </a>
            </div>
            <p>Own the product and development of the mobile app end to end.</p>
          </article>
          <article class="feature-item">
            <h3>Executive Assignments</h3>
            <p>Leading an enhancement project to improve assignment flows and team tooling.</p>
          </article>
          <article class="feature-item">
            <h3>Meta Integrations</h3>
            <p>
              Deep work on WhatsApp API and Meta Business Manager. The team calls
              it the "Meta Whisperer" role.
            </p>
          </article>
        </div>
      </article>
    `;
  }
}

customElements.define("vambe-experience", VambeExperience);
