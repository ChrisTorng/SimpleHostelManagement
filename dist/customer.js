"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(customer_id, name, title, mobile, notes) {
        this.customer_id = customer_id;
        this.name = name;
        this.title = title;
        this.mobile = mobile;
        this.notes = notes;
    }
    Customer.prototype.updateCustomerInfo = function (name, title, mobile, notes) {
        this.name = name;
        this.title = title;
        this.mobile = mobile;
        this.notes = notes;
    };
    return Customer;
}());
exports.Customer = Customer;
