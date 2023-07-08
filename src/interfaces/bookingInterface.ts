export interface BookingInterface {
    booking_id: string;
    customer_id: string;
    date: Date;
    room_numbers: string[];
    total_price: number;
    deposit_paid: number;
    paid_in_full: boolean;
    notes: string;
}