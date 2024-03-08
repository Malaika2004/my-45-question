let name_1 : string = "Malaika"
let name_2 : string = "Malaika khan"
let name_3 : string =  "Miss Malaika khan"

 

if (name_1 == name_3){
    console.log("names are equal");
}else{
    console.log("names are not equal");
}



if (name_1 != name_2){
     console.log("names are not  equal");
}


if (name_1 != name_3){
    console.log("names  are  equal");
}


let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18) {
    console.log("eligible for vote");
}

if (age_1 != 22){
    console.log("eligible for vote in older category");
}

// less than
if (age_1 <= age_2){
    console.log("younger");
}

// greater than 
if (age_2 >= age_1){
    console.log("older");
}

if (age_1 == 18 && age_2 == 22 ){
    console.log("person is eligible for vote");
}


 if (age_1 == 18 || age_2 != 22 ){
    console.log("person is not eligible  for vote");
}


let country : string [] = ["Pakistan", "India", "Japan", "China",];
if (country.includes("Pakistan")){
    console.log("Pakistan is in country list");
}

if (!country.includes ("America")){
     console.log("America is not include in an array");
}



