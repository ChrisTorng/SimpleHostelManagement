import { RoomInterface } from './interfaces/roomInterface';

export class Room implements RoomInterface {
    roomNumber: string;
    type: string;
    price: number;
    available: boolean;

    constructor(roomNumber: string, type: string, price: number) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.available = false;
    }

    bookRoom() {
        this.available = true;
    }

    checkoutRoom() {
        this.available = false;
    }
}