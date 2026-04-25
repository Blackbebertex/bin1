/**
 * Configuration for pricing plans
 */
const prices = {
    monthly: { basic: 19, pro: 49, ent: 99 },
    yearly: { basic: 15, pro: 39, ent: 79 }
};

/**
 * Updates the prices based on toggle state
 */
function updatePrices() {
    const isYearly = document.getElementById('toggle').checked;
    const mode = isYearly ? 'yearly' : 'monthly';
    
    // Update numeric values
    document.getElementById('basic-price').innerText = prices[mode].basic;
    document.getElementById('pro-price').innerText = prices[mode].pro;
    document.getElementById('ent-price').innerText = prices[mode].ent;
    
    // Update period labels
    const suffixes = document.querySelectorAll('.price span:last-child');
    suffixes.forEach(s => s.innerText = isYearly ? '/yr' : '/mo');
}

// Global scope attachment
window.updatePrices = updatePrices;
