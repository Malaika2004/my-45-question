// creating a guest list array
let guestlist = ["Iqra", "saman", "Malaika"];

// making variable for those guest who can't come
let dontcome = guestlist[2];

// print the name of guest who can't come
console.log(dontcome, "nhi aa skti");

// add or remove  guest from guest list array
guestlist.splice(2,1, "Aman");

// meassage print for bigger table
console.log("good news we have found a bigger table for dinner.");

// adding a new  guest at starting index of array
guestlist.unshift("Ali");

// adding a new  guest at ending index of array
guestlist.push("sara");

// get a middle index of our guest list array
 let middleindex: number = Math.floor(guestlist.length / 2);

 // adding a new guest list to middke index of array
 guestlist.splice(middleindex, 0, "hezlin");

//print message of updated list
 console.log("update list of our guests");

 // sending a invitation message to our guests one by one with their names
 guestlist.forEach(oneguest => console.log(`Hi ${oneguest}, would you like to dinnerr with me?`));

  