// form swipper
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active')
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
})

// form input
        let usr = document.getElementById('mail');
        
        let password = document.getElementById('fakePassword');
        let toggler = document.getElementById('toggler');

        
        showHidePassword = () => {
            if (password.type === 'password') {
                
                password.setAttribute('type', 'text');
                toggler.classList.add('fa-eye-slash');
            } else {
                
                toggler.classList.remove('fa-eye-slash');
                password.setAttribute('type', 'password');
            }
        };

        toggler.addEventListener('click', showHidePassword);
        

        if(usr.type == 'email'){
            usr.setAttribute('type', 'text');
            
        }else{
            usr.setAttribute('type', 'email');

        }
        
