import { Customer } from './customer.ts';
import { Booking } from './booking.ts';
import { Room } from './room.ts';
import { displayUpcomingBookings, addBookingRecord, addCustomerInfo, viewAllBookings, updateCustomerInfo, updateBookingInfo, deleteBookingRecord, deleteCustomerInfo } from './utils.ts';

// Initialize data
let customerData: Customer[] = [];
let bookingData: Booking[] = [];

// DOM Elements
const homePage = document.getElementById('homePage');
const bookingRecordPage = document.getElementById('bookingRecordPage');
const newBookingForm = document.getElementById('newBookingForm');
const newCustomerForm = document.getElementById('newCustomerForm');

// Event Listeners
newBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
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