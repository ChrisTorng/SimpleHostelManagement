import { Booking } from './booking.js';
// Initialize data
var customerData = [];
var bookingData = [];
// DOM Elements
var homePage = document.getElementById('homePage');
var bookingRecordPage = document.getElementById('bookingRecordPage');
var newBookingForm = document.getElementById('newBookingForm');
var newCustomerForm = document.getElementById('newCustomerForm');
// Event Listeners
newBookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var newBooking = new Booking('booking_id', 'customer_id');
    addBookingRecord();
});
newCustomerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addCustomerInfo();
});
homePage.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'viewAllBookings') {
        viewAllBookings();
    }
});
bookingRecordPage.addEventListener('click', function (e) {
    if (e.target && e.target.id.startsWith('updateBooking')) {
        var bookingId = e.target.id.split('-')[1];
        updateBookingInfo(bookingId);
    }
    else if (e.target && e.target.id.startsWith('deleteBooking')) {
        var bookingId = e.target.id.split('-')[1];
        deleteBookingRecord(bookingId);
    }
    else if (e.target && e.target.id.startsWith('updateCustomer')) {
        var customerId = e.target.id.split('-')[1];
        updateCustomerInfo(customerId);
    }
    else if (e.target && e.target.id.startsWith('deleteCustomer')) {
        var customerId = e.target.id.split('-')[1];
        deleteCustomerInfo(customerId);
    }
});
// Initial display
displayUpcomingBookings();
