class Customer {
    constructor() {
        
    }

    private _user: string;
    public get GetUser(): string {
        if (this._user == null) {
            return "No name";
        }
        return this._user;
    }
    public set SetUser(value: string) {
        this._user = value;
    } 

    public Validate(user: string, age: number): boolean {
        console.log(user);
        console.log(age);

        if (user == 'Zlatko' && age == 24.56)  {
            return true;
        }
        return false;
    }
}

class SuperCustomer extends Customer {
    private _car: string;
    public get GetCar() {
        if (this._car == null) {
            return "No car";
        }
        return this._car;
    }

    public set SetCar(value: string) {
        this._car = value;
    }

}