const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(function(e){
    let newP= document.createElement("p");
    newP.textContent = e;
    document.getElementById("planets").appendChild(newP);
})

var planets2 = planets.map(function(e){
    let x = e.slice(1, e.length);
    let y = e.slice(0, 1).toUpperCase();
    return y + x;
})

console.log(planets2);

let planets3 = planets.filter(function(e){
    return e.includes("e");
})

console.log(planets3)

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

console.log(words.join(" "));
console.log(words.reduce(function(accumulator, currentValue){
    return  accumulator + " " + currentValue;
}))