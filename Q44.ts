function sandwich (...items: string[]): void {
    console.log("sandwich order:")
   
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }

}

console.log("enjoy your sandwich Malaika ")

sandwich('capsicum', 'tomato', 'chiken')
sandwich('beef', 'cheese')
sandwich('garlic chiken', 'mayo')