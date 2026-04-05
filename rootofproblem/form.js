const textarea = document.getElementById('description');
const charCount = document.getElementById('char-count');
const feedbackElement = document.getElementById('feedback');
const formElement = document.querySelector('form'); // FIXED
const nameArea = document.getElementById('name');

const maxLength = 200;

// Update character count as user types
textarea.addEventListener('input', function () {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength} / ${maxLength}`;
});

// Handle form submission
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const currentLength = textarea.value.length;
    const nameLength = nameArea.value.length;

    if (currentLength > maxLength) {
        feedbackElement.innerHTML = "Failed to submit: Description is too long.";
        feedbackElement.style.display = "block";
        return;
    } else if (currentLength == 0) {
        feedbackElement.innerHTML = "Failed to submit: Description is empty.";
        feedbackElement.style.display = "block";
        return;
    } else if (nameLength == 0) {
        feedbackElement.innerHTML = "Failed to submit: Name is empty.";
        feedbackElement.style.display = "block";
        return;
    }

    feedbackElement.innerHTML = "Successfully submitted: Your feedback has been received!";
    feedbackElement.style.display = "block";

    formElement.reset();
    charCount.textContent = `0 / ${maxLength}`; // reset counter
});