"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(roomNumber, type, price) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.isBooked = false;
    }
    Room.prototype.bookRoom = function () {
        this.isBooked = true;
    };
    Room.prototype.checkoutRoom = function () {
        this.isBooked = false;
    };
    return Room;
}());
exports.Room = Room;
