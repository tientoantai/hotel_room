'use strict';
var Hotel = function(){

};

Hotel.prototype.getHotelId = function () {
    return this.hotel_id;
};
Hotel.prototype.getHotelName = function () {
    return this.hotel_name;
};
Hotel.prototype.getHotelAddress = function () {
    return this.hotel_address;
};

module.exports = Hotel;