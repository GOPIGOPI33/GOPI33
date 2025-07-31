document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const messageElement = document.getElementById('message');

    registrationForm.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Reset previous messages
        messageElement.textContent = '';
        messageElement.className = '';

        // --- Validation ---
        if (password !== confirmPassword) {
            messageElement.textContent = 'Passwords do not match!';
            messageElement.className = 'error';
            return; // Stop the function
        }
        
        // Create user object
        const user = {
            name: name,
            email: email,
            password: password // In a real app, never store plain text passwords!
        };

        // --- Save to Local Storage ---
        // Local storage can only store strings, so we convert the object to a JSON string
        try {
            localStorage.setItem('user', JSON.stringify(user));
            
            // Provide success feedback
            messageElement.textContent = 'Registration successful! ✅';
            messageElement.className = 'success';
            
            // Optionally, clear the form
            registrationForm.reset();

        } catch (error) {
            messageElement.textContent = 'Failed to save data. Storage may be full.';
            messageElement.className = 'error';
            console.error('Error saving to local storage:', error);
        }
    });
});