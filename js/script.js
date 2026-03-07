document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".app-logo");

  logos.forEach((logo) => {
    const visual = logo.closest(".app-visual");
    const placeholder = visual?.querySelector(".app-logo-placeholder");

    logo.addEventListener("load", () => {
      logo.classList.add("show");
      if (placeholder) {
        placeholder.style.display = "none";
      }
    });

    logo.addEventListener("error", () => {
      logo.classList.remove("show");
      if (placeholder) {
        placeholder.style.display = "flex";
      }
    });

    if (logo.complete && logo.naturalWidth > 0) {
      logo.classList.add("show");
      if (placeholder) {
        placeholder.style.display = "none";
      }
    }
  });
});
