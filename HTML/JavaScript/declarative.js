/*map method
let nums2=[1,2,3,4,5]
function getSquare(val){
return val*val;
}
let mappedSqr=nums2.map(getSquare);
console.log('Square from map', mappedSqr)

let nums2=[1,2,3,4,5];
let ans=nums2.map(function(val){
  return val*val;
})
console.log(ans);

let transactions=[1000,2000,3000,4000,5000]
let inrToDollar=84
let conversion=transactions.map(function(inr){
  return (inr/inrToDollar).toFixed(2);  //to fix string length
})
console.log(conversion);*/



//let nums=[1,23,45,46,58,90,13,37]
/*function evenno(n){
    let even=[]
    for(let i=0;i<n.length; i++){
        if(n[i]%2==0){
            even.push(n[i]);
        }
    }
    return even;
}
let ans=evenno(nums);
console.log(ans) 

//declaratively using filter
function checkeven(val){
    return val%2==0
}
let ans=nums.filter(checkeven)
console.log(ans)

let ans=nums.filter(function (val){
    return val%2==0
})
console.log(ans)

let transactions=[1000, -2000, 3000, -4000, 5000]
let ans=transactions.filter(function(val){
    return val>0
})
console.log(ans)


let nums=[1,2,3,4,5]
function sum(a){
    let sum=0; //accumulator
    for(let i=0; i<a.length; i++){
        sum=sum+a[i];  //current value
    }
    return sum;
}
let ans=sum(nums);
console.log(ans);

//reduce-two arguments
let nums=[1,2,3,4,5]
let ans=nums.reduce(function(acc, curr){
   acc=acc+curr;
   return acc;
},0)  //initializing the acc

console.log(ans)

let transactions=[2000, 3000, -2500, 3000, -1000]
let ans=transactions.filter(function(val){
    return val>0;
}).map(function(val){
    return (val/83); 
}).reduce(function(acc, curr){
    acc=acc+curr;
    return acc;
},0)
console.log(ans)

const cart=[
    {name: 'Laptop', price:1000},
    {name: 'Phone', price: 500},
    {name: 'Tablet', price: 300},
    {name: 'Headphones', price: 200},
]

let total=cart.reduce(function(acc, item){
    acc=acc+item.price;
    return acc;},0);
console.log(total);
*/
//forEach
let nums2=[1,2,3,4,5];
let ans1=nums2.forEach(function(val){
    console.log(val*val);
})

//find
let transactions=[2000, 3000, -2500, 3000, -1000]
let ans=transactions.find(function(val){
    return val>0;
})
console.log(ans);

//findIndex
let ans3= transactions.findIndex(function(val){
    return val<0;
})
console.log(ans3);

//some
let ans4= transactions.some(function(val){
    return val<0;
})
console.log(ans4); 

//every
let ans5=transactions.every(function(val){
    return val>0;
})
console.log(ans5)







