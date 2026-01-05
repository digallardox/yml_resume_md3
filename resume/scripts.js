// Render functions
function renderHeader(header) {
  document.getElementById('name').textContent = header.name;
}

function renderContact(contact) {
  document.getElementById('contact').innerHTML = Object.values(contact).map(item => `
    <span>${item}</span>
  `).join(' ');
}

function renderLinks(links) {
  document.getElementById('links').innerHTML = links.map(link => `
    <div class="link-item">
      <span class="link-icon">[${link.icon}]</span>
      <a href="${link.url}" target="_blank">${link.name}</a>
    </div>
  `).join('');
}

function renderSummary(summary) {
  document.getElementById('summary').innerHTML = `<p>${summary.join(' ')}</p>`;
}

function renderExperience(experience) {
  document.getElementById('experience').innerHTML = experience.map(job => `
    <div class="job">
      <h3>${job.title} / ${job.company}</h3>
      <p>${job.dates}</p>
      ${job.summary.length > 0 ? `<ul>${job.summary.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
    </div>
  `).join(' ');
}

function renderEducation(education) {
  const degreesHTML = education.map(edu => `
    <div class="education-item">
      <p>${edu.degree}</p>
      <p>${edu.institution}</p>
      <p>${edu.dates}</p>
    </div>
  `).join('');

  document.getElementById('education').innerHTML = degreesHTML;
}

function renderCertifications(certifications) {
  const certificationsHTML = certifications.map(cert => `
    <div class="education-item">
      <p>${cert.course}</p>
      <p>${cert.provider}</p>
      ${cert.dates ? `<p>${cert.dates}</p>` : ''}
    </div>
  `).join('');

  document.getElementById('certifications').innerHTML = certificationsHTML;
}

function renderSkills(skills) {
  document.getElementById('skills').innerHTML = Object.entries(skills).map(([category, skillList]) => `
    <div class="skill-category">
      <h4>${category}</h4>
      <p>${skillList.join(', ')}</p>
    </div>
  `).join('');
}

// Main function
(async () => {
  const layout = await fetch('../data/layout.yml').then(res => res.text()).then(text => jsyaml.load(text));
  const resume = await fetch('../data/resume.yml').then(res => res.text()).then(text => jsyaml.load(text));

  renderHeader(layout);
  renderContact(layout.contact);
  renderLinks(layout.links);
  renderSummary(resume.summary);
  renderExperience(resume.experience);
  renderEducation(resume.education);
  renderCertifications(resume.certifications);
  renderSkills(resume.skills);
})();
