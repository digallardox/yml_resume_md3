// Cover Letter - Render functions
// Renders layout (name, links, contact) and cover letter content

function renderHeader(layout) {
  document.getElementById('name').textContent = layout.name;
}

function renderLinks(links) {
  document.getElementById('links').innerHTML = links.map(link => `
    <div class="link-item">
      <span class="link-icon">[${link.icon}]</span>
      <a href="${link.url}" target="_blank">${link.name}</a>
    </div>
  `).join('');
}

function renderContact(contact) {
  document.getElementById('contact').innerHTML = Object.values(contact).map(item => `
    <span>${item}</span>
  `).join(' ');
}

function renderSalutation(salutation) {
  document.getElementById('salutation').innerHTML = `<p class="cover-letter-salutation">${salutation}</p>`;
}

function renderBody(body) {
  document.getElementById('body').innerHTML = body.map(paragraph => `
    <p>${paragraph}</p>
  `).join('');
}

// Main function - Load data and render
(async () => {
  const layout = await fetch('../data/layout.yml').then(res => res.text()).then(text => jsyaml.load(text));
  const coverLetter = await fetch('../data/cover-letter.yml').then(res => res.text()).then(text => jsyaml.load(text));

  renderHeader(layout);
  renderLinks(layout.links);
  renderContact(layout.contact);
  renderSalutation(coverLetter.salutation);
  renderBody(coverLetter.body);
})();
