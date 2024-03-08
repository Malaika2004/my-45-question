var guestlist = ["Iqra", "saman", "Malaika"];
var dontcome = guestlist[2];
console.log(dontcome, "nhi aa skta");
guestlist.splice(2, 1, "Aman");
guestlist.forEach(function (guest) { return console.log("Hi ".concat(guest, ", would you like to dinner with me?")); });
