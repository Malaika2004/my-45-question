var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print it's original order
var countriestovisit = ["pakistan", "Dubai", "china", "Argentina"];
console.log("original order:", countriestovisit);
// print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort());
//show that the array is still in it's originsa; order
console.log("still in original order:", countriestovisit);
// print the array in reversed order without modifying the original array list
console.log("Reverse order:", __spreadArray([], countriestovisit, true).reverse());
// show that the array is still in it's originak order
console.log("still in original order:", countriestovisit);
// we have changed the original array order now
console.log("original array reversed:", countriestovisit.reverse());
// print the array to show that it's back to it's original order
console.log("back to original order:", countriestovisit.reverse());
// print the array to show that it's order has been changed in Alphabetical order now
console.log("sorted in alphabetical oeder:", countriestovisit.sort());
// we have changed again the original array order now in reverse order again
console.log("original array reversed again:", countriestovisit.reverse());
