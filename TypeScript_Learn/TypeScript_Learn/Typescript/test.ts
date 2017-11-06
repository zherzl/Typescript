class Test {
    public age: number = 1;
    constructor(howMany: number) {
        this.age = howMany;
    }
    
    Validate(input: number): boolean {
        if (input > 20) {
            return true;
        }
        return false;
    }
}

