// script.js

// Platform icons and names
const platformIcons = {
  'win': '🪟',
  'mac': '🍎'
};

const platformNames = {
  'win': 'Windows',
  'mac': 'macOS'
};

// Load VPN packages from API
fetch("/api/packages")
  .then(res => res.json())
  .then(packages => {
    const container = document.getElementById("package-list");
    packages.forEach(pkg => {
      const card = document.createElement("div");
      card.className = "download-card";
      card.innerHTML = `
        <div class="platform-header">
          <div class="platform-icon">${platformIcons[pkg.id] || '💻'}</div>
          <div class="platform-info">
            <h3>${pkg.name}</h3>
            <span class="version">Version ${pkg.version}</span>
          </div>
        </div>
        <p class="download-description">${pkg.description}</p>
        <div class="specs-list">
          <ul>
            <li>OS Version: ${pkg.osVersion}</li>
            <li>Download Size: ${pkg.size}</li>
            <li>Required Memory: ${pkg.memory}</li>
            <li>Network Interface Type: ${pkg.networkType}</li>
            <li>Auto-update enabled</li>
            <li>Easy installation</li>
          </ul>
        </div>
        <a href="${pkg.file}" download class="download-btn">
          Download for ${platformNames[pkg.id]}
        </a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error loading packages:', err);
    document.getElementById("package-list").innerHTML = 
      '<p style="text-align: center; color: #6c757d;">Unable to load packages. Please refresh the page.</p>';
  });

// FAQ Toggle functionality
document.addEventListener('click', function(e) {
  if (e.target.closest('.faq-item')) {
    const faqItem = e.target.closest('.faq-item');
    faqItem.classList.toggle('active');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});