const textarea = document.getElementById('myTextarea');
const charCount = document.getElementById('charCount');
const maxChars = 200; // Set your desired maximum character limit

// Add an input event listener to the textarea
textarea.addEventListener('input', () => {
    const currentChars = textarea.value.length;
    charCount.textContent = `${currentChars}/${maxChars} characters`;
});