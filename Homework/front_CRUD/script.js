const form = document.getElementById('user-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const checkboxInput = document.getElementById('checkbox');
const btn = document.getElementById('btn');
const usersList = document.getElementById('users');
const usersData = [];

// Function to check if the form is valid
function checkFormValidity() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const isCheckboxChecked = checkboxInput.checked;

    const isFormValid = username && email && password && confirmPassword && isCheckboxChecked && (password === confirmPassword);
    btn.disabled = !isFormValid;
}

// Function to render the user list
function renderUserList() {
    usersList.innerHTML = '';
    usersData.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Username: ${user.username} - Email: ${user.email} - Password: ${user.password}
            <button onclick="deleteUser(${index})">Delete</button>
            <button onclick="updateUser(${index})">Update</button>
        `;
        usersList.appendChild(li);
    });
    console.log('Updated Users List:', usersData);
}

// Function to delete a user
function deleteUser(index) {
    console.log('Deleting User:', usersData[index]);
    usersData.splice(index, 1);
    renderUserList();
}

// Function to update a user
function updateUser(index) {
    const user = usersData[index];
    console.log('Updating User:', user);
    usernameInput.value = user.username;
    emailInput.value = user.email;
    passwordInput.value = user.password;
    confirmPasswordInput.value = user.password;
    checkboxInput.checked = true;
    
    deleteUser(index); // Remove the user so it can be re-added on submit
    checkFormValidity(); // Ensure the form is valid
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

    if (username && email && password && isCheckboxChecked && (password === confirmPassword)) {
        const user = {
            username: username,
            email: email,
            password: password
        };

        usersData.push(user);
        renderUserList();
        console.log('Added User:', user);
        form.reset();
        btn.disabled = true; // Disable the button again after submission
    } else {
        console.log('Form is not valid.');
    }
});