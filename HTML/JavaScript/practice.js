/* 1.
function reverseArray(arr) {
    let a = arr.reverse(); // Reverse the array in place
    return a; // Return the reversed array
}

let array = reverseArray(['A', 'n', 'u', 's', 'h', 'i', 'k', 'a']); // Pass an array
console.log(array); // Output: ['a', 'k', 'i', 'h', 's', 'u', 'n', 'A']

2.
function removeDuplicates(arr) {
    let a = []; // This will hold unique elements
    for (let i = 0; i < arr.length; i++) {
        if (!a.includes(arr[i])) {
            a.push(arr[i]); // Add unique element to a
        }
    }
    return a; // Return the array with duplicates removed
}

let array = removeDuplicates(['a', 'n', 'u', 's', 'h', 'i', 'k', 'a']);
console.log(array); // Output: ['a', 'n', 'u', 's', 'h', 'i', 'k']

3.
function findMaximum(arr){
    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
let max1=findMaximum([1,5,3,4,2]);
console.log(max1);


function SumArray(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
return sum;
}
let sum1=SumArray([1,2,3,4,5]);
console.log(sum1);


//string questions
//reverse string
function reverseString(str){
    const rev=str.split('').reverse().join('');
    return rev;
}
let a=reverseString('hello')
console.log(a)

//checking the count of vowels
let vowels=['a','e','i','o','u']
function countVowels(str){
let count=0;
for(let i=0; i<str.length;i++){
    if(vowels.includes(str.charAt(i))){
        count=count+1;
    }
}
return count;
}
console.log(countVowels("hello world"));

//checking palindrome
function isPalindrome(str){
    let reverse=str.split('').reverse().join('');
    for(let i=0; i<str.length;i++){
        if(str.charAt(i)==reverse.charAt(i)){
            return "yes"
        }
        else{
            return "No"
        }
    }
}
console.log(isPalindrome("racecar"));


//remove whitespaces
function removeWhitespaces(str){
    return str.replace(" ","");
}
console.log(removeWhitespaces("hello world"));
*/

//capitalize the first letter of every word in a string
/*function capitalizeWords(str){

}
//to capitalize
function capitalizeWords(str) {
    let words = str.split(' '); 
    let capitalizedWords = []; 

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord); 

    return capitalizedWords.join(' '); 
}
console.log(capitalizeWords("hello world")); 

//to flatten the array
function flattenArray(arr) {
    return arr.flat(Infinity); // Flattens the array to any depth
}
console.log(flattenArray([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]

//merge objects
function mergeObjects(obj1, obj2){
    let merged={...obj1, ...obj2}
    return merged;
}
console.log(mergeObjects({a: 1}, {b: 2}));

//number of properties in an object
function countProperties(obj){
    let count=Object.keys(obj).length;
    return count;
}
console.log(countProperties({a: 1, b: 2}));

//deep clone object
function deepClone(obj){
    let clone=JSON.parse(JSON.stringify(obj));
    return clone;
}
console.log(deepClone({a:1, b:2}));

//filter key 
function filterByKeys(obj, keys) {
    const filtered = {};
    
    // Loop through each key in the keys array
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        // If the key exists in the object, add it to the filtered object
        if (obj[key] !== undefined) {
            filtered[key] = obj[key];
        }
    }
    
    return filtered;
}
console.log(filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c']));

//swap keys and value
function swapKeysAndValues(obj){
    let swap=Object.fromEntries(Object.entries(obj).map(([key,value]) => [value, key]));
    return swap;
}
console.log(swapKeysAndValues({a: 1, b: 2}))
*/

