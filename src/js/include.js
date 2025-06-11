//- include.js
export async function includeHTML() {
  const includeElements = document.querySelectorAll("[data-include]");

  for (const el of includeElements) {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(`/${file}.html`);
      if (!response.ok) throw new Error(`Could not fetch ${file}.html`);

      const html = await response.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(err);
      el.innerHTML = `<p style="color:red;">Error loading ${file}.html</p>`;
    }
  }
}
