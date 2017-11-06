var Test = (function () {
    function Test(howMany) {
        this.age = 1;
        this.age = howMany;
    }
    Test.prototype.Validate = function (input) {
        if (input > 20) {
            return true;
        }
        return false;
    };
    return Test;
}());
//# sourceMappingURL=test.js.map