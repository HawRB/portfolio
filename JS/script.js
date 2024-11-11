
        let user;
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault();
            const Username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            const usernameError = document.querySelector('#usernameError');
            const passwordError = document.querySelector('#passwordError');

            if (!user) {
                usernameError.style.display = 'block';
            } else {
                usernameError.style.display = 'none';
            }

            if (!password) {
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }

            if (user && password) {
                console.log(`Username: ${Username}, Password: ${password}`);
                location.href = 'scammed.html';
            }
        });
        function displayUsername(username) {
            const usernameElement = document.getElementById('username-display');
            if (usernameElement) {
                usernameElement.textContent = `Velkommen, ${username}!`;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const username = localStorage.getItem('username');
            if (username) {
                user = username;
                displayUsername(username);
            }
        });
        console.log("Username saved:", username); // After saving username in localStorage
console.log("Retrieved username:", localStorage.getItem("username")); // On scammed.html

