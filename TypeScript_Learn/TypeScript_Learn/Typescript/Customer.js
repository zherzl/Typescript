var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "GetUser", {
        get: function () {
            if (this._user == null) {
                return "No name";
            }
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "SetUser", {
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.Validate = function (user, age) {
        console.log(user);
        console.log(age);
        if (user == 'Zlatko' && age == 24.56) {
            return true;
        }
        return false;
    };
    return Customer;
}());
var SuperCustomer = (function (_super) {
    __extends(SuperCustomer, _super);
    function SuperCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuperCustomer.prototype, "GetCar", {
        get: function () {
            if (this._car == null) {
                return "No car";
            }
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperCustomer.prototype, "SetCar", {
        set: function (value) {
            this._car = value;
        },
        enumerable: true,
        configurable: true
    });
    return SuperCustomer;
}(Customer));
//# sourceMappingURL=Customer.js.map