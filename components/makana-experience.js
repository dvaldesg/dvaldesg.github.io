const rubyIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
    <line x1="7" y1="17" x2="7.01" y2="17" />
  </svg>
`;

const pythonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2s-5 5.5-5 10a5 5 0 0 0 10 0c0-4.5-5-10-5-10Z" />
    <path d="M10 14a2 2 0 1 0 4 0" />
  </svg>
`;

const tableauIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
`;

class MakanaExperience extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="exp-card">
        <div class="exp-header">
          <div>
            <div class="exp-company">Makana</div>
            <div class="exp-role">Junior Software Engineer</div>
          </div>
        </div>
        <p class="exp-description">
          Early-stage startup in the worker health and risk prevention space. Joined a
          multi-discipline team spanning statistics, health sciences, kinesiology, HR,
          impact measurement, and risk prevention to validate the company's core hypothesis
          through data.
        </p>
        <div class="stack-section" aria-label="Stack used at Makana">
          <div class="stack-label">Stack</div>
          <div class="pill-row">
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${rubyIcon}</span>
              Ruby on Rails
            </span>
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${pythonIcon}</span>
              Python
            </span>
            <span class="pill stack-pill">
              <span class="stack-pill-icon" aria-hidden="true">${tableauIcon}</span>
              Tableau
            </span>
          </div>
        </div>
        <div class="feature-grid">
          <article class="feature-item">
            <h3>Data Validation</h3>
            <p>
              Designed and built the data pipeline used to demonstrate that the company's
              core idea was statistically valid across disciplines and client segments.
            </p>
          </article>
          <article class="feature-item">
            <h3>Automated Reports</h3>
            <p>
              Reduced client report delivery from a week to a few minutes by automating
              the full generation pipeline using Google Docs API, Presentations API,
              Tableau, and Python.
            </p>
          </article>
          <article class="feature-item">
            <h3>Database Restructure</h3>
            <p>
              Redesigned and restructured the database schema to support cleaner data flows,
              better scalability, and the evolving needs of the product.
            </p>
          </article>
        </div>
      </article>
    `;
  }
}

customElements.define("makana-experience", MakanaExperience);
