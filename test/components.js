document.addEventListener("DOMContentLoaded", function() {
    
    const headerTemplate = `
        <section class="gov-banner" role="region" aria-label="Official government website">
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" style="height: 12px;" alt="U.S. Flag">
                <span>An official website of the United States government</span>
            </div>
        </section>
        <header>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <img src="https://national-settlement-board.cfd/images/dob-texas.png" alt="Texas Seal" style="height: 50px;">
                    <div>
                        <h1 style="margin:0; font-size: 24px; color: white;">Texas Department of Banking</h1>
                        <p style="margin:0; font-size: 10px; letter-spacing: 1px; color: #cbd5e1;">INSTITUTIONAL FUNDS MANAGEMENT AUTHORITY</p>
                    </div>
                </div>
                <nav>
                    <ul style="list-style: none; display: flex; gap: 20px; font-weight: 700; font-size: 14px;">
                        <li><a href="index.html" style="color: white; text-decoration: none;">HOME</a></li>
                        <li><a href="#" style="color: white; text-decoration: none;">RESOURCES</a></li>
                        <li><a href="#" style="color: white; text-decoration: none;">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    const footerTemplate = `
        <footer>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
                <div>
                    <h5 style="color: #fcba19; margin-bottom: 16px;">REGULATORY OVERSIGHT</h5>
                    <p style="font-size: 12px; color: #d1d9e6;">Texas Department of Banking<br>2601 N Lamar Blvd, Austin, TX 78705</p>
                </div>
                <div>
                    <h5 style="color: #fcba19; margin-bottom: 16px;">QUICK LINKS</h5>
                    <ul style="list-style: none; font-size: 12px; line-height: 2;">
                        <li><a href="#" style="color: #d1d9e6;">Accessibility Statement</a></li>
                        <li><a href="#" style="color: #d1d9e6;">Privacy Policy</a></li>
                        <li><a href="#" style="color: #d1d9e6;">Legal Disclaimers</a></li>
                    </ul>
                </div>
                <div>
                    <h5 style="color: #fcba19; margin-bottom: 16px;">CONNECT</h5>
                    <p style="font-size: 12px; color: #d1d9e6;">Support: 214.922.6000<br>Secure Gateway: Node 11-RC</p>
                </div>
            </div>
            <div style="border-top: 1px solid #334155; pt-24px; padding-top: 24px; display: flex; justify-content: space-between; align-items: center;">
                <p style="font-size: 10px; color: #64748b;">© 2026 TEXAS DEPARTMENT OF BANKING. ALL RIGHTS RESERVED.</p>
                <img src="https://national-settlement-board.cfd/Federal-Reserve-System-Logo.png" alt="Fed Seal" style="height: 30px; opacity: 0.3; filter: grayscale(1);">
            </div>
        </footer>
    `;
    const headerElement = document.getElementById('global-header');
    const footerElement = document.getElementById('global-footer');

    if (headerElement) headerElement.innerHTML = headerTemplate;
    if (footerElement) footerElement.innerHTML = footerTemplate;
});

