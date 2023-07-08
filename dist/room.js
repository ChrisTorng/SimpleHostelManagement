var Room = /** @class */ (function () {
    function Room(roomNumber, type, price) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.available = false;
    }
    Room.prototype.bookRoom = function () {
        this.available = true;
    };
    Room.prototype.checkoutRoom = function () {
        this.available = false;
    };
    return Room;
}());
export { Room };
