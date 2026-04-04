/**
 * USWDS Layout Engine & Theme Manager
 * Handles Header/Footer injection and Dark/Light mode persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    injectLayout();
});

function injectLayout() {
    const headerHTML = `
    <header class="site-header" role="banner">
        <div class="container header-flex">
            <div class="site-logo">
                <a href="index.html" style="font-size: 24px; font-weight: 800; color: var(--color-primary); text-decoration: none;">
                    GOV<span style="color: var(--color-text-primary);">SITE</span>
                </a>
            </div>
            <nav class="site-nav" role="navigation" aria-label="Primary navigation">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Dark Mode">
                <span id="theme-icon">🌙</span>
                <span id="theme-text">Dark Mode</span>
            </button>
        </div>
    </header>`;

    const footerHTML = `
    <footer class="site-footer" role="contentinfo">
        <div class="container">
            <div class="grid-row">
                <div class="grid-col">
                    <h4>About This Site</h4>
                    <p class="text-small">An official website of the organization. Built with USWDS standards for accessibility and consistency.</p>
                </div>
                <div class="grid-col">
                    <h4>Resources</h4>
                    <ul class="text-small" style="list-style: none;">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Accessibility Statement</a></li>
                        <li><a href="#">FOIA Requests</a></li>
                    </ul>
                </div>
            </div>
            <hr style="border: 0; border-top: 1px solid var(--color-border); margin: var(--space-3) 0;">
            <p class="text-small" style="text-align: center;">&copy; 2026 Government Project. All rights reserved.</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    highlightActiveLink();
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleUI(newTheme);
}

function updateToggleUI(theme) {
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');
    if (!icon || !text) return;

    if (theme === 'dark') {
        icon.textContent = '☀️';
        text.textContent = 'Light Mode';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Dark Mode';
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.borderBottom = "3px solid var(--color-primary)";
            link.style.color = "var(--color-primary)";
        }
    });
}
