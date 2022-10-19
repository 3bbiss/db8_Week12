interface Car{
    make:string;
    model:string;
    year:number;
};

let car1:Car = {
    make: "Ford",
    model: "Mustang",
    year: 1065
};

let car2:Car = {
    make: "Chevy",
    model: "Trax",
    year: 2018
};

let car3:Car = {
    make: "Tesla",
    model: "Roadster",
    year: 3000
};

console.log(car1);
console.log(car2);
console.log(car3);


// Let's make an array of these
// First without a type, e.g. JavaScript style

let thing = {
    make: 1000,
    model: "Hello",
    size: 50
};

let stuff = [car1, car2, car3, thing];
// let cars:Car[] = [car1, car2, car3, thing]; // cant do this