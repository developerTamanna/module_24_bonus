// js er falsy valu= 0, "", undefined, NuN,false
// 🎯 Truthy & Falsy Values কি?
// ✅ Truthy Values: (যা if ব্লকে true হিসেবে কাজ করে)

// সব ধরনের নন-এম্পটি স্ট্রিং ("hello", "0", "false")
// নাম্বার (except 0) (1, -1, 100)
// অবজেক্ট বা অ্যারে ([], {})
// ❌ Falsy Values: (যা if ব্লকে false হিসেবে কাজ করে)

// "" (empty string)
// 0 (zero)
// null
// undefined
// NaN (Not a Number)
// false


//   next

// let email ="tamanna@gmail.com"
// if(email){
//     console.log('submitted')
// }
// else{
// console.log('please enter a number')
// }



// next
function emailAddress(input){
if(input){
    return 'submitted'
}
else{
    return 'please enter your email'
}
}

const input = emailAddress('tamanna@gmai.com');
console.log(input)