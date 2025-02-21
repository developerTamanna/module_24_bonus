// var useRole = 'User';
// if(useRole === 'Admin'){
//     console.log('redirecting to admin dashboard...');
// }
// else if(useRole ==='Editor'){
//  console.log('redirecting to editor panel')
// }
// else{
//     console.log('redirecting to homPage')
// }

// nnext

function useRole(input){
if(input==='admin'){
    return 'redirecting to admin dashboard'
}
else if(input==='editor'){
    return ' redirecting to editor panel'
}
else{
    return 'redirecting to home page'
}
}

const input = useRole('admin');
console.log(input)
