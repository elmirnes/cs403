const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('checkbox');
const button = form.querySelector('button');
const confirmPasswordInput=document.getElementById('confirmpassword')
const usersData=[]
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
        
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const isCheckboxChecked = checkboxInput.checked;
    const confirmPassword=confirmPasswordInput.value;
    const usersData=[]
    if ((username) && (email) && (password )&& (isCheckboxChecked ) )  {
        if (confirmPassword==password){
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Checkbox checked:', isCheckboxChecked);
            console.log("Confirm pass",confirmPassword);
            const user = {
                username : username,
                email : email,
                password : password,
                confirmPassword: confirmPassword,
                isCheckboxChecked : isCheckboxChecked
            };
            usersData.push(user)
            console.log(usersData);
        }/*else{
            window.location.href = './error.html'
        }*/
    }
}
)

