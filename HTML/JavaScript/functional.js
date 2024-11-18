// write three functions
// Each function should calculate different data
// 1. Areas - [] New Array
// 2. Circumference -[]  New Array
// 3.Diamters = []  New Array
// You cannot mutate the original array

// Area

/*let myRadius = [1, 2, 3, 4, 5, 4];

function calculateArea(r) {
  return 3.14 * r * r;
}

function calculateCircumference(r) {
  return 2 * 3.14 * r;
}

function calculateDiameter(r) {
  return 2 * r;
}

function calculateData(raidus, cb) {
  let data = [];

  for (let i = 0; i < raidus.length; i++) {
    data.push(cb(raidus[i]));
  }
  return data;
}

let finalAreas = calculateData(myRadius, calculateArea);
let finalDiameter = calculateData(myRadius, calculateDiameter);
let finalCircumference = calculateData(myRadius, calculateCircumference);
console.log(finalAreas);
console.log(finalDiameter);
console.log(finalCircumference);*/

// Diameter

// Circumference

//imperative way of writing code - when we pass on every instruction 
/*
let arr1=[1,2,3,4,5]
function square(a){
  let ans=[];
  for(let i=0; i<a.length; i++){
  ans.push(a[i]*a[i]);
  }
  return ans;
}
let finalans= square(arr1);
console.log(finalans);

declarative way if writing code - we will just tell the program what to do, we'll only provide the logic, rest all will be done
by program

//map method
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
console.log(conversion);


function PrintName(cb){
  console.log('Anushika');
  cb();
}
function surname(){
  console.log('Chauhan');
}
function age(){
  console.log(18);
}
PrintName(surname);
*/
radius=[1,2,3,4,5];
function area(r){
  return (Math.PI*r*r).toFixed(0);
}
function Circumference(r){
  return (2*Math.PI*r).toFixed(0);
}
function diameter(r){
  return 2*r;
}
function data(radiuses,cb){
  let a=[];
  for(let i=0; i<radiuses.length; i++){
    a.push(cb(radiuses[i]));
  }
  return a;
}
let area1=data(radius,area);
let cir=data(radius,Circumference);
let dia=data(radius,diameter);
console.log(area1);
console.log(cir);
console.log(dia);
