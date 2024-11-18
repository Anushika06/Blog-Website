/*function doubleNumbers(nums){
let ans=nums.map(function(val){
    return 2*val;
})
return ans;
}
console.log(doubleNumbers([1, 2, 3]));

function filterFalsey(arr) {
    return arr.filter(function(val) {
        return Boolean(val); // Keep only truthy values
    });
}

// Example usage
console.log(filterFalsey([0, 1, false, 2, "", 3])); // Output: [1, 2, 3]

function findUser(users, name){
   return users.reduce(function(val){
        return users.find(user => user.name==name);
    })
}
console.log(findUser([{name: 'Alice'}, {name: 'Bob'}], 'Bob'));

function sumArray(nums){
   return nums.reduce(function(acc, curr){
        acc=acc+curr;
        return acc;
    },0);
}
console.log(sumArray([1, 2, 3, 4]));
*/
function allEven(nums){
    return nums.some(function(val){
        return val%2==0;
    });
}
console.log(allEven([1, 2, 3]));