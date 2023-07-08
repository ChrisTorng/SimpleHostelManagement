export function displayMessage(message) {
    console.log(message);
}
export function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
export function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(year, "-").concat(month < 10 ? '0' + month : month, "-").concat(day < 10 ? '0' + day : day);
}
export function parseDate(dateString) {
    var _a = dateString.split('-').map(Number), year = _a[0], month = _a[1], day = _a[2];
    return new Date(year, month - 1, day);
}
