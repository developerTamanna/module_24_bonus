// let isUserLogged = false;
// if(!isUserLogged){
//     console.log('show sign up button');
// }

// else{
//     console.log('pls log in')
// }

//  next

function isUserLogged(input){
if(input !==false){
    return 'show sign up button'
}
else{
    return 'pls login'
}
}

const input = isUserLogged(true);
console.log(input)