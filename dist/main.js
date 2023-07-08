"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_ts_1 = require("./utils.ts");
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
    (0, utils_ts_1.addBookingRecord)();
});
newCustomerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    (0, utils_ts_1.addCustomerInfo)();
});
homePage.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'viewAllBookings') {
        (0, utils_ts_1.viewAllBookings)();
    }
});
bookingRecordPage.addEventListener('click', function (e) {
    if (e.target && e.target.id.startsWith('updateBooking')) {
        var bookingId = e.target.id.split('-')[1];
        (0, utils_ts_1.updateBookingInfo)(bookingId);
    }
    else if (e.target && e.target.id.startsWith('deleteBooking')) {
        var bookingId = e.target.id.split('-')[1];
        (0, utils_ts_1.deleteBookingRecord)(bookingId);
    }
    else if (e.target && e.target.id.startsWith('updateCustomer')) {
        var customerId = e.target.id.split('-')[1];
        (0, utils_ts_1.updateCustomerInfo)(customerId);
    }
    else if (e.target && e.target.id.startsWith('deleteCustomer')) {
        var customerId = e.target.id.split('-')[1];
        (0, utils_ts_1.deleteCustomerInfo)(customerId);
    }
});
// Initial display
(0, utils_ts_1.displayUpcomingBookings)();
