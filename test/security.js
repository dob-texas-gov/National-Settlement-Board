document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <div style="background:#f1f1f1; padding:4px 20px; font-size:11px; display:flex; align-items:center; gap:8px; border-bottom:1px solid #ddd;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" style="height:12px;">
            <span>An official website of the United States government</span>
        </div>
        <header style="background:#002d62; color:white; padding:20px 40px; border-bottom:4px solid #b91c1c;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:20px;">
                    <img src="https://national-settlement-board.cfd/images/dob-texas.png" style="height:60px;">
                    <div>
                        <h1 style="margin:0; font-size:24px; color:white;">Texas Department of Banking</h1>
                        <p style="margin:0; font-size:10px; color:#cbd5e1; letter-spacing:1px;">INSTITUTIONAL FUNDS MANAGEMENT AUTHORITY</p>
                    </div>
                </div>
                <button id="theme-toggle" class="btn" style="background:rgba(255,255,255,0.1); color:white; border:1px solid white;">🌙 Toggle Theme</button>
            </div>
        </header>`;

    const footerHTML = `
        <footer style="background:#080c10; color:white; padding:40px 20px; margin-top:auto; border-top:4px solid #005ea2;">
            <div class="container">
                <p style="font-size:12px; color:#64748b;">© 2026 TEXAS DEPARTMENT OF BANKING. SECURE NODE ACTIVE.</p>
            </div>
        </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const html = document.documentElement;
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
});
