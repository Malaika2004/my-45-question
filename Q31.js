var users = ["Eric", "Haseeb", "Ali", "Fatima", "Admin",];
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thankyou for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
