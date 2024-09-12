// script.js

document.addEventListener('DOMContentLoaded', () => {
    const passwordBox = document.getElementById('passwordAttempt');
    let attempt = 1111;

    function updatePassword() {
        // Set the password attempt message
        passwordBox.textContent = `Testing passwords: ${attempt} - Wrong password`;

        // Increment the password attempt
        attempt += 1000;
        if (attempt > 9999) {
            attempt = 1111; // Reset after reaching the maximum
        }
    }

    // Update every 2 seconds (2000 milliseconds) for better visual effect
    setInterval(updatePassword, 2000);
});
