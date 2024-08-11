document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link a');
    const registerLink = document.querySelector('.register-link a');
    const registerForm = document.querySelector('.form-box.register');
    const loginForm = document.querySelector('.form-box.login');

    // Function to show registration form
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();

        wrapper.classList.add('active');
        registerForm.style.transform = 'translateX(0)';
        loginForm.style.transform = 'translateX(-100%)';
    });

    // Function to show login form
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();

        wrapper.classList.remove('active');
        registerForm.style.transform = 'translateX(100%)';
        loginForm.style.transform = 'translateX(0)';
    });
});
