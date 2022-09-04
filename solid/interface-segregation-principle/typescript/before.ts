interface Bird {
    fly(): string;
    eat(): string;
}

class Duck implements Bird {
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
    public fly(): string {
        throw 'I can not fly'
    }
}

