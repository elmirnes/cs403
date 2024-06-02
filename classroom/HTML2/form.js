const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const checkboxInput = document.getElementById('checkbox');
const btn = document.querySelector('#btn');
const usersData = [];

// Function to check if the form is valid
function checkFormValidity() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const isCheckboxChecked = checkboxInput.checked;

    if (username && email && password && confirmPassword && isCheckboxChecked && password === confirmPassword) {
btn.disabled = false;
    } else {
btn.disabled = true;
    }
}
// Add event listeners to all inputs to check form validity
usernameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);
confirmPasswordInput.addEventListener('input', checkFormValidity);
checkboxInput.addEventListener('input', checkFormValidity);

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const isCheckboxChecked = checkboxInput.checked;

    if (username && email && password && isCheckboxChecked && password === confirmPassword) {
const user = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    isCheckboxChecked: isCheckboxChecked
};

usersData.push(user);
console.log(usersData);
    } else {
console.log('Form is not valid.');
    }
});