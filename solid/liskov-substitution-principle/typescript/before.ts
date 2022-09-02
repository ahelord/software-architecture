abstract class Vehicle {

}

class Car extends Vehicle {
    public accelerate(): string {
        return 'accelerate'
    }
}

class Bike extends Vehicle {
    public givePedal(): string {
        return 'givePedal'
    }
}

function movesVehicles(vehicles: Vehicle[]) {
    vehicles.forEach(vehicle => {
        if (vehicle instanceof Car) {
            vehicle.accelerate()
        }
        if (vehicle instanceof Bike) {
            vehicle.givePedal()
        }
    });
}

const car = new Car()
const bike = new Bike()
const vehicles: Vehicle[] = [car, bike];

movesVehicles(vehicles);