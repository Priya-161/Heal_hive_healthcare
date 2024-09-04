// script.js

document.addEventListener('DOMContentLoaded', function() {
    const emergencyButton = document.querySelector('.emergency-button');

    emergencyButton.addEventListener('click', function() {
        window.location.href = 'hospital.html';
    });
});
