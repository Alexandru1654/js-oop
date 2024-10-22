// Car class
class Car {
    constructor(brand, year, color, doors, fuel) {
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.fuel = fuel;
    }

    // Car information
    information() {
        return `Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}, Doors: ${this.doors}, Fuel: ${this.fuel}`;
    }

    // Car age
    age() {
        const year = new Date().getFullYear();
        return year - this.year;
    }
}

// Car instance
const myCar = new Car("Fiat", "2019", "blue", 4, "gasoline");

console.log (myCar.information());
console.log (`Car age: ${myCar.age()} years`);

