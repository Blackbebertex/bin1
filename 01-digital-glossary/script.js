/**
 * Filters the glossary table based on search input
 */
function filterTable() {
    const input = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    const noResults = document.getElementById('noResults');
    let hasResults = false;

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(input)) {
            row.style.display = "";
            hasResults = true;
        } else {
            row.style.display = "none";
        }
    });

    noResults.style.display = hasResults ? "none" : "block";
}

// Ensure the function is available globally if needed for inline onkeyup
window.filterTable = filterTable;
