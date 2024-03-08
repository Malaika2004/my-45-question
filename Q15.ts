let guestlist = ["Iqra", "saman", "Malaika"];

let dontcome = guestlist[2];

console.log(dontcome, "nhi aa skta");

guestlist.splice(2, 1, "Aman");

guestlist.forEach(guest => console.log(`Hi ${guest}, would you like to dinner with me?`));

