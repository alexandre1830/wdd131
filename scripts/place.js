function setupFooter() {
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
}

function calculateWindChill(){
    
    const tempEl = document.getElementById('temperature');
    const windEl = document.getElementById('wind-speed');

    const T = tempEl ? parseFloat(tempEl.textContent) : 10;
    const S = windEl ? parseFloat(windEl.textContent) : 5;

    const windChillElement = document.getElementById('wind-chill');
    if (!windChillElement) return;

    
    if (T > 10 || S <= 4.8) {
        windChillElement.textContent = "N/A";
        return;
    }

    const wc = 13.12 + 0.6215 * T - 11.37 * Math.pow(S, 0.16) + 0.3965 * T * Math.pow(S, 0.16);
    windChillElement.textContent = wc.toFixed(1) + "°C";
}

document.addEventListener('DOMContentLoaded', () => {
    setupFooter();
    calculateWindChill();
});