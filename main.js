document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('nav-links');
  const heroTitle = document.getElementById('hero-title');
  const heroIntro = document.getElementById('hero-intro');
  const noticeButtons = document.getElementById('notice-buttons');
  const noticeText = document.getElementById('notice');
  const highlightsList = document.getElementById('highlights-list');
  const reasonsList = document.getElementById('reasons-list');
  const footerText = document.getElementById('footer-text');

  if (navList) {
    navList.innerHTML = siteData.navItems
      .map(
        (item) => `
          <li>
            <a href="${item.href}" class="${item.active ? 'active' : ''}">${item.label}</a>
          </li>
        `
      )
      .join('');
  }

  if (heroTitle) {
    heroTitle.textContent = siteData.hero.title;
  }

  if (heroIntro) {
    heroIntro.innerHTML = siteData.hero.intro
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');
  }

  if (noticeButtons) {
    noticeButtons.innerHTML = siteData.notices
      .map(
        (item) => `<button type="button" data-message="${item.message}">${item.label}</button>`
      )
      .join('');

    noticeButtons.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        noticeText.textContent = button.dataset.message;
      });
    });
  }

  if (highlightsList) {
    highlightsList.innerHTML = siteData.highlights
      .map((item) => `<li>${item}</li>`)
      .join('');
  }

  if (reasonsList) {
    reasonsList.innerHTML = siteData.reasons
      .map((item) => `<li>${item}</li>`)
      .join('');
  }

  if (footerText) {
    footerText.textContent = siteData.footerText;
  }
});
