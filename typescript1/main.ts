import { Circle } from "./circle";





class Figures {
    circles:Circle[] = [];
    addCircle(mycircle:Circle){
        this.circles.push(mycircle);
    }

    listCircles(){
        for (let next of this.circles){
            console.log(`The ${next.fillcolor} circle has area
             ${next.radius * next.radius * Math.PI}`);
        }
    }
}


let myFigures = new Figures();

myFigures.addCircle({
    radius: 5, fillcolor: "Blue", linecolor: "Red", lineweight: 2
});

myFigures.addCircle({
    radius: 6.5, fillcolor: "Red", linecolor: "Black", lineweight: 3
});


myFigures.listCircles();

let c1:Circle = {
    radius: 2.5,
    fillcolor: "Blue",
    linecolor: "White",
    lineweight: 5
}

