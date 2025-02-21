// const numbers =[54, 67, 65, 8,34,];
//   for(let i = 0; i < numbers.length; i++){
//     // console.log(numbers[i])
//   }

//   for(let num of numbers){
//     // console.log(num)
//   }
//   next



function matchedProducts(products, search){
    const matched =[];
  for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product)
    }
  }
  return matched;
}

  const products =[
    {id:1, name:'xiami phone on right', price:1900},
    {id:2, name:'i Phone', price:9000},
    {id:3, name:'mac book air', price:9000},
    {id:4, name:'lenovovyoga leptop 2025', price:45642},
    {id:5, name:'dell inspiron', price:433333},
    {id:6, name:'samsung phone note 7', price:20000},
    {id:7, name:'nokia old age phone gone', price:5000},
    {id:8, name:'phone one', price:6000},
  ]

//   for(const product of products){
//     console.log(product)
//   }

const result = matchedProducts(products, 'leptop');
console.log(result);