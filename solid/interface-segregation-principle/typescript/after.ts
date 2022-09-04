interface Bird {
    eat(): string;
}

interface BirdFlying {
    fly(): string;
}

class Duck implements Bird, BirdFlying {
    public eat(): string {
        return 'eating'
    }
    public fly(): string {
        return 'flying'
    }
}

class Penguin implements Bird {
    public eat(): string {
        return 'eating'
    }
}

