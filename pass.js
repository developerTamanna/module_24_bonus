// let email = 'sathi@gmail.com';
// let password = 123;
// if(email && password){
//     console.log('logged in')
// }
// else{
//     console.log('please fill in the all input fields')
// }


// next

function isLogged(email, pass){
  if(email && pass){
    return 'logged in'
  }
  else{
    return 'please fill in the all input fields'
  }
}

const input = isLogged('astamanna@gmail.com', '123');
console.log(input)