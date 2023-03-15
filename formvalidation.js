
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            const label = input.previousElementSibling.textContent.trim();
            if (input.value === '') {
                input.style.border = '1px solid red';
                valid = false;
            } else {
                input.style.border = '';
            }
            if (input.type === 'email' && !validateEmail(input.value)) {
                alert(`${label} must be in the correct format`);
                valid = false;
            }
        });
        if (valid) {
            alert('Form submitted successfully');
            form.reset();
        } else {
            alert('Warning:Please fill out all required fields');
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

confirmPasswordInput.addEventListener('keyup', function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
});
