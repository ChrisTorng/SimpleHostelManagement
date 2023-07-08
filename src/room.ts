import { RoomInterface } from './interfaces/roomInterface';

export class Room implements RoomInterface {
    roomNumber: string;
    type: string;
    price: number;
    isBooked: boolean;

    constructor(roomNumber: string, type: string, price: number) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.isBooked = false;
    }

    bookRoom() {
        this.isBooked = true;
    }

    checkoutRoom() {
        this.isBooked = false;
    }
}