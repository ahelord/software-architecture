abstract class Vehicle {
    public abstract move(): void
}

class Car extends Vehicle {
    public move(): string {
        return 'accelerate'
    }
}

class Bike extends Vehicle {
    public move(): string {
        return 'givePedal'
    }
}

function movesVehicles(vehicles: Vehicle[]) {
    vehicles.forEach(vehicle => {
      vehicle.move()
    });
}

const car = new Car()
const bike = new Bike()
const vehicles: Vehicle[] = [car, bike];

movesVehicles(vehicles);