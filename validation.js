// // function myValidation() {
// //     const myValue = document.getElementById('myForm').value
// //     console.log(myValue)
// //     if (isNaN(myValue)) {
// //         const newChange = document.querySelector('#iddone')
// //         newChange.textContent = myValue
// //     }
// // }

// // form validation

document.querySelector('.cform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value)
    let pass1 = event.target.password.value
    let pass2 = event.target.repassword.value
    if (pass1 === pass2) {

        console.log('Please recheck the password you are typing');
    } else {

        console.log('You have created the account');
    }

    event.target.username.value = '';
    event.target.password.value = '';
    event.target.repassword.value = '';
})

// document.querySelector('.cform').addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target.username.value);
//     let password1 = event.target.password.value
//     let password2 = event.target.repassword.value

//     if (password1 === password2) {

//         console.log('Pasword Match');


//     } else {
//         console.log('Please check your Password');

//     }
//     event.target.username.value = '';
//     event.target.password.value = '';
//     event.target.repassword.value = '';
// })