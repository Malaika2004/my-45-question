// creating a guest list array
var guestlist = ["Iqra", "saman", "Malaika"];
// making variable for those guest who can't come
var dontcome = guestlist[2];
// print the name of guest who can't come
console.log(dontcome, "nhi aa skti");
// add or remove  guest from guest list array
guestlist.splice(2, 1, "Aman");
// meassage print for bigger table
console.log("good news we have found a bigger table for dinner.");
// adding a new  guest at starting index of array
guestlist.unshift("Ali");
// adding a new  guest at ending index of array
guestlist.push("sara");
// get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
// adding a new guest list to middke index of array
guestlist.splice(middleindex, 0, "hezlin");
//print message of updated list
console.log("update list of our guests");
// sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Hi ".concat(oneguest, ", would you like to dinnerr with me?")); });
// inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can invite only two guets to dinner with me");
// using while-loop to remove guest from the array until only two names remain
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry, ".concat(removedguest, " i can't invite you to dinner"));
}
// sending a invitations to the lasttwo guest on the list
console.log("Invitations to the last two guest");
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("empty list:", guestlist);
