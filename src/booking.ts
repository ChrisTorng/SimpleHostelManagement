import { BookingInterface } from './interfaces/bookingInterface';

export class Booking implements BookingInterface {
    booking_id: string;
    customer_id: string;
    date: Date;
    room_numbers: string[];
    total_price: number;
    deposit_paid: number;
    paid_in_full: boolean;
    notes: string;

    constructor(booking_id: string, customer_id: string, date: Date, room_numbers: string[], total_price: number, deposit_paid: number, paid_in_full: boolean, notes: string) {
        this.booking_id = booking_id;
        this.customer_id = customer_id;
        this.date = date;
        this.room_numbers = room_numbers;
        this.total_price = total_price;
        this.deposit_paid = deposit_paid;
        this.paid_in_full = paid_in_full;
        this.notes = notes;
    }

    updateBookingInfo(booking_id: string, customer_id: string, date: Date, room_numbers: string[], total_price: number, deposit_paid: number, paid_in_full: boolean, notes: string) {
        this.booking_id = booking_id;
        this.customer_id = customer_id;
        this.date = date;
        this.room_numbers = room_numbers;
        this.total_price = total_price;
        this.deposit_paid = deposit_paid;
        this.paid_in_full = paid_in_full;
        this.notes = notes;
    }

    deleteBookingRecord() {
        // Code to delete booking record
    }
}