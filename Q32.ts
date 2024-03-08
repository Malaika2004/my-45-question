 let current_users : string [] = ["Admin", "Eric", "Ali", "Hamza", "Fatima"]
 let new_users : string [] = ["Admin", "Fatima", "Aliza", "Haseeb", "Noor"]
 
 let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())


for(let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLocaleLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    }else {
        console.log(`yes ${new_user}, is still in available list`)
    }
}




