var car = 'subaru';
// Test 1: equality comparison (True)
console.log("is car == 'subaru'? i predict True.");
console.log(car == 'subaru'); // True
//  Test 2: strict equality comparision (True)
console.log("Is car === 'subaru'? I predicted True.");
console.log(car === 'subaru'); // True
// Test 3: Ineqaulity comparision (False)
console.log("Is car != 'subaru'? I predicted False.");
console.log(car != 'subaru'); // False
// Teat 4: strict inequality comparision (False)
console.log("Is car !== 'subaru'? I predicted False.");
console.log(car !== 'subaru'); // False
// Test 5: less than comparision (False)
console.log(" Is car < 'subaru'? I predicted False.");
console.log(car < 'subaru'); // False (lexicorghraphic comparision)
// Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predicted False.");
console.log(car > 'subaru'); // False (lexicroghraphic False)
// Test 7: less than or equal comparision (True)
console.log("Is car <= 'subaru'? I predicted True.");
console.log(car <= 'subaru'); // True 
// Test 8: Greater than or equal comparision (True)
console.log("Is car >= 'subaru'? Ipredicted True.");
console.log(car >= 'subaru'); // True
// Test 9: checking Truthiness (True)
console.log("Is car? I predicted True.");
console.log(car); // True (non-empty string is truthy)
// Test 10: checking falsiness (False)
console.log("Is !car? I predicted False.");
console.log(!car); // False (nagation of truthy value)
