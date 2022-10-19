// Interval Practice 1.1

// function printTime(){
//     console.log("printTime")
//     console.log(new Date());
// }
// setInterval(printTime, 5000);


// // Interval Practice 1.2

// let printTime2 = () => {
//     console.log("printTime2");
//     console.log (new Date());
// }
// setInterval(printTime2,3000);


// Interval Practice 2.1

// setInterval(function() {
//     console.log("Interval Practice 2.1")
//     console.log(new Date());
// }, 3000);


// Interval Practice 2.2

// setInterval(()=>{
//     console.log("Interval Practice 2.2")
//     console.log(new Date());
// }, 2000);


// Timeout Practice 1.1

// console.log("About to call setTimeout");

// setTimeout(()=>{
//     console.log("Timeout Practice 1.1");
//     console.log("Hola");
// },4000);

// console.log("Done calling setTimeout");


// forEach Practice 1.1

// let names:string[] = ["Fred", "Sally", "Jack", "Susan", "Carlito", "Ed"];
// console.log("About to call forEach");

// names.forEach(
//     (name:string) => {
//         console.log(`Welcome ${name}!`);
//     }
// );

// console.log("Done calling forEach");

// for (let name of names){
//     console.log(`Ay welcome ${name}`);
// };


let nums: number[] = [5, 10, 15, 20, 25];
let sum:number = 0;

nums.forEach(
    (num) => {
        sum += num;
    }
);

console.log(sum);