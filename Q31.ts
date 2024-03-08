   let users : string [] = ["Eric", "Haseeb", "Ali", "Fatima", "Admin",]

if (users.length === 0) {
    console.log("we need to find some users!")
} else {
    for (let user of users) {
        if ( user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, thankyou for logging in again`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("we need to find some users!")
}



