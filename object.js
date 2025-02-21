const hafez = {
    name: 'ustad numan',
    address: 'quran kitab',
    id:232,
    isSingle: false,
    friends: ['jakir nayek', 'mawlana tarik jamil', 'mufti saheb'],
    program:[{name:'pkistan-city', date:'14-6-7'}, {name:'india' , date:'12-4-2024'}],
    boyan: function(){
        console.log('assalamualikum plz start yours boyan')
    },
    car:{
        brand:'micro',
        price: 32556,
        made: 2020,
        manufacturer:{
          name: 'micro',
          ceo: 'janina ami',
          country:"london"
        }
    }
}
// console.log(hafez.car)
console.log(hafez.boyan);
hafez.boyan();