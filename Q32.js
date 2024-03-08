var current_users = ["Admin", "Eric", "Ali", "Hamza", "Fatima"];
var new_users = ["Admin", "Fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log("sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still in available list"));
    }
}
