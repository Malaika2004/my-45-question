let  personName: string = "Malaika";

//in lowercase
console.log("lowercase:",  personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toUpperCase());

//title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));