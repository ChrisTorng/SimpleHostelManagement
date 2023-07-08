import { Customer } from './customer.js';
import { Booking } from './booking.js';
import { Room } from './room.js';
import {
    // displayUpcomingBookings,
    // addBookingRecord,
    // addCustomerInfo,
    // viewAllBookings,
    // updateCustomerInfo,
    // updateBookingInfo,
    // deleteBookingRecord,
    // deleteCustomerInfo
} from './utils.js';

// Initialize data
let customerData: Customer[] = [];
let bookingData: Booking[] = [];

// DOM Elements
const homePage: HTMLElement = document.getElementById('homePage')!;
const bookingRecordPage: HTMLElement = document.getElementById('bookingRecordPage')!;
const newBookingForm: HTMLElement = document.getElementById('newBookingForm')!;
const newCustomerForm: HTMLElement = document.getElementById('newCustomerForm')!;

// Event Listeners
newBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const newBooking: Booking = new Booking(
    //     'booking_id',
    //     'customer_id',

    // );
    addBookingRecord();
});

newCustomerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addCustomerInfo();
});

homePage.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'viewAllBookings') {
        viewAllBookings();
    }
});

bookingRecordPage.addEventListener('click', (e) => {
    if (e.target && e.target.id.startsWith('updateBooking')) {
        const bookingId = e.target.id.split('-')[1];
        updateBookingInfo(bookingId);
    } else if (e.target && e.target.id.startsWith('deleteBooking')) {
        const bookingId = e.target.id.split('-')[1];
        deleteBookingRecord(bookingId);
    } else if (e.target && e.target.id.startsWith('updateCustomer')) {
        const customerId = e.target.id.split('-')[1];
        updateCustomerInfo(customerId);
    } else if (e.target && e.target.id.startsWith('deleteCustomer')) {
        const customerId = e.target.id.split('-')[1];
        deleteCustomerInfo(customerId);
    }
});

// Initial display
displayUpcomingBookings();