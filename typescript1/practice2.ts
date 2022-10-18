let nums: number[] = [5,6,10,3,2];

for (let i:number = 0; i<nums.length; i++){
    console.log(nums[i]);
}

console.log();
console.log();


// let f1 = (p: number) => {
//     console.log(p*2);
// };

// console.log(f1(10));
// nums.forEach(f1);

// nums.forEach(num => {
//     console.log(num);
// });

// nums.forEach(
//     (p: number) => {
//         console.log(p*2);
//     }
// );

for (let num of nums){
    console.log(num * 3);
}