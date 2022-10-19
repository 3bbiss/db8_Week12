// Compare the results of a function to the function itself
// Analogy:
    // Using a real-world object vs
    // Buying that real-world object and gifting it to someone
    //
    //          E.G. 
    // I can use my PS5
    //          OR
    // I can buy my guy a PS5 and give it to him

    // This fn takes two numbers, adds them, and returns the sum
    // let Add = (x:number, y:number):number => {
    //     return x + y;
    // };

    // let sum = Add(5, 10);
    // console.log(sum);

    function MakeCup(brand:string) {
        return `One cup of ${brand}`;
    }

    let cup1:string = MakeCup("Folgers");
    console.log(cup1);

    console.log(MakeCup("Starbucks"));


    function sendCoffeeMaker(machine) {
        let cup = machine("Peets");
        console.log(cup);
    }

    sendCoffeeMaker(MakeCup);