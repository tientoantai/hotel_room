'use strict';
var Room = function(){

};

Room.prototype.getRoomlId = function () {
    return this.room_id;
};
Room.prototype.getRoomName = function () {
    return this.room_name;
};
Room.prototype.getRoomPrice = function () {
    return this.room_price;
};
Room.prototype.getRoomHotelId = function () {
    return this.hotel_id;
};

module.exports = Room;