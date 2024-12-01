// script.js
const teamSelection = document.getElementById('team-selection');
const teamButtons = document.querySelectorAll('#team-selection button');
const uploadArea = document.getElementById('upload-area');
const uploadButton = document.getElementById('upload-button');
const wordEntry = document.getElementById('word-entry');
const wordInput = document.getElementById('word-input');
const submitButton = document.getElementById('submit-word');
const teamWordsList = document.getElementById('team-words');
const teamMessage = document.getElementById('team-message');
const uploadMessage = document.getElementById('upload-message');
const wordMessage = document.getElementById('word-message');
const currentTeamSpan = document.getElementById('current-team');

let currentTeam = null; // Store the currently selected team

// Team selection handling
teamButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentTeam = button.id.slice(-1); // Extract team letter (A or B)
        teamSelection.style.display = 'none';
        uploadArea.style.display = 'block';
        teamMessage.textContent = `You've joined Team ${currentTeam}`;
    });
});

// Picture upload handling
uploadButton.addEventListener('click', () => {
    const picture = document.getElementById('picture-upload').files[0];
    if (!picture) {
        uploadMessage.textContent = 'Please select an image to upload.';
        return;
    }

    // Implement image upload logic to your backend (not shown in this example)

    // For demonstration purposes, assume successful upload
    uploadArea.style.display = 'none';
    wordEntry.style.display = 'block';
    currentTeamSpan.textContent = currentTeam;
    // Send image data to backend for storage (not shown here)
});

// Word submission handling
submitButton.addEventListener('click', () => {
    const word = wordInput.value.trim();
    if (!word) {
        wordMessage.textContent = 'Please enter a word.';
        return;
    }

    // Send data (team, word, timestamp) to backend for storage (not shown here)

    // Update displayed words