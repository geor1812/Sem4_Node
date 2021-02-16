//My First Function
const myFirstFunction = () => {
    return "Hello function!";
}

//Callback functions, they are passed as arguments in another function
const sayHiLater = (anyFunctionReference) => {
    anyFunctionReference();
};

//Task2
sayHiLater(() => console.log("Hi"));

//Task3
const sayHello = () => {
    console.log("Hello")
}
sayHiLater(sayHello);

//Task4
function interact(genericInteraction, name) {
    genericInteraction(name);
}

const hug = (name) => {
    console.log("Hug " + name)
};

interact(hug, "Godzilla");

//Task5
interact(name => console.log("Lick " + name), "ice cream");