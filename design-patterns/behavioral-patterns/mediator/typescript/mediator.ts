/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
    notify(sender: object, event: string): void;
}

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
class ControlTower implements Mediator {
    private airplane: Airplane;
    private militaryHelicopter: MilitaryHelicopter;

    constructor(airplane: Airplane, militaryHelicopter: MilitaryHelicopter) {
        this.airplane = airplane;
        this.airplane.setMediator(this);
        this.militaryHelicopter = militaryHelicopter;
        this.militaryHelicopter.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'takeoff' && sender === this.airplane) {
            console.log('Mediator reacts on takeoff of airplane and triggers following operations:');
            this.militaryHelicopter.landing();
        }

        if (event === 'takeoff' && sender === this.militaryHelicopter) {
            console.log('Mediator reacts on takeoff militaryHelicopter and triggers following operations:');
            this.airplane.landing();
        }
    }
}

/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
class AirCraft {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Airplane extends AirCraft {
    public takeoff(): void {
        console.log('Component Airplane does takeoff.');
        this.mediator.notify(this, 'takeoff');
    }

    public landing(): void {
        console.log('Component Airplane does landing.');
        this.mediator.notify(this, 'landing');
    }
}

class MilitaryHelicopter extends AirCraft {
    public takeoff(): void {
        console.log('Component MilitaryHelicopter does takeoff.');
        this.mediator.notify(this, 'takeoff');
    }

    public landing(): void {
        console.log('Component MilitaryHelicopter does landing.');
        this.mediator.notify(this, 'landing');
    }
}

/**
 * The client code.
 */
const airplane = new Airplane();
const militaryHelicopter = new MilitaryHelicopter();
// there may be many aircraft:  light aircraft, cargo plane
const controlTower = new ControlTower(airplane, militaryHelicopter);

console.log('Client airplane triggers operation takeoff.');
airplane.takeoff();

console.log('');
console.log('Client militaryHelicopter triggers operation takeoff.');
militaryHelicopter.takeoff();

// npx typescript .\pattern-mediator.ts  
