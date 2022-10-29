class Vehicle {
    constructor(brand, color, make, year, trim){
        this.brand = brand
        this.color = color
        this.make = make
        this.year = year
        this.trim = trim
        this.mileage = 8000
        this.numberOfWheels = 0
    }

    drive(mph){
        console.log("Current Speed Is:" + mph)
    }

    miles(milesDriven) {
        this.mileage += milesDriven
        console.log("Current mileage is" + " " +this.mileage)
}

}

class Car extends Vehicle {

}



const car = new Vehicle ()
const testCar = new Car()
console.log(car, testCar)
// car.miles(5000)
// car.drive(300)

testCar.drive(50)