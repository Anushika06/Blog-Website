/*var a = 14

function square(m){
    var ans = m*m
    return ans
}

//function as expression
var sqr=function(m){
    var ans =m*m
    return ans
}
var ans=sqr(4)
console.log(ans)

console.log(a);
let a=14    //result-Cannot access 'a' before initialization (with let and const); with var-->undefined 
*/

let a=[4];
let ans=a.map(function(val){
    return a*a;
}).filter(function(val){
    return (a*a)%2==0;
})

console.log(ans);

const check=(x)=>((x*x)%2==0 ? true : false)
console.log(check(4));
