const person = {
    name: "John Wick",
    car: "1969 Ford Mustang",
    dogStatus: "dead",
    killTheWholeRussianMafia: function () {
        this.dogStatus = "alive";
    },
};

console.log(person);
console.log(person.dogStatus === "alive");
person.killTheWholeRussianMafia();
console.log(person.dogStatus === "alive");
