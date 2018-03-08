function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

var list = document.getElementById('hotel-list');
list.onclick = function (event) {
  var hotelName = event.target.innerHTML;
  var hotel = new Hotel(hotelName, 20, 15);

  var name = document.getElementById('name');
  name.textContent = hotel.name;

  var rooms = document.getElementById('rooms');
  rooms.textContent = hotel.rooms;

  var booked = document.getElementById('booked');
  booked.textContent = hotel.booked;

  document.getElementById('available').textContent = hotel.checkAvailability();
};
