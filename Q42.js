function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great';
    }
}
var magicians2 = ["Asad", "Ali", "Bilal"];
make_great(magicians2);
show_magicians(magicians2);
