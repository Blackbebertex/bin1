/**
 * Adds a new skill to the list
 */
function addSkill() {
    const nameInput = document.getElementById('skillName');
    const valueInput = document.getElementById('skillValue');
    
    const name = nameInput.value.trim();
    const value = valueInput.value;

    if (!name || value === "" || value < 0 || value > 100) {
        alert("Please enter a valid skill name and proficiency (0-100).");
        return;
    }

    const list = document.getElementById('skillsList');
    const item = document.createElement('div');
    item.className = 'skill-item';
    
    // Using a template literal for modern structure
    item.innerHTML = `
        <div class="skill-header">
            <span>${name}</span>
            <span>${value}%</span>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${value}%"></div>
        </div>
    `;
    
    list.appendChild(item);

    // Reset inputs
    nameInput.value = '';
    valueInput.value = '';
}

// Global scope attachment
window.addSkill = addSkill;

// Animation trigger on load
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
});
