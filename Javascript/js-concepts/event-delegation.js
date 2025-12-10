document.getElementById("category").addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        window.location.href = "/" + e.target.id
    }
})

document.getElementById("form").addEventListener("keyup", (e) => {
    console.log(e.target.value);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})

// Uses
// Handle child events at a parent level
// Fewer event listeners → faster and less memory used
// Simple Code - Centralized logic in one place
// Handles dynamic elements -  Works even if children are added after page load

