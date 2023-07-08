var Booking = /** @class */ (function () {
    function Booking(booking_id, customer_id, date, room_numbers, total_price, deposit_paid, paid_in_full, notes) {
        this.booking_id = booking_id;
        this.customer_id = customer_id;
        this.date = date;
        this.room_numbers = room_numbers;
        this.total_price = total_price;
        this.deposit_paid = deposit_paid;
        this.paid_in_full = paid_in_full;
        this.notes = notes;
    }
    Booking.prototype.updateBookingInfo = function (booking_id, customer_id, date, room_numbers, total_price, deposit_paid, paid_in_full, notes) {
        this.booking_id = booking_id;
        this.customer_id = customer_id;
        this.date = date;
        this.room_numbers = room_numbers;
        this.total_price = total_price;
        this.deposit_paid = deposit_paid;
        this.paid_in_full = paid_in_full;
        this.notes = notes;
    };
    Booking.prototype.deleteBookingRecord = function () {
        // Code to delete booking record
    };
    return Booking;
}());
export { Booking };
