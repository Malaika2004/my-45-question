function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; ; i++) {
        greatMagicians.push(magicians[i] + "the great");
    }
    return greatMagicians;
}
var magicians3 = ["Asad", "Ali", "Bilal"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
