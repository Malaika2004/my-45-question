function makeAlbum (artist: string, title: string): { artist: string; title: string} {
  const dictonaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toLocaleUpperCase() + title.slice(1)
  };
  return dictonaries;
}

let album = makeAlbum("Ali", "Light")
console.log(album)

album = makeAlbum("Bilal", "red wave")
console.log(album)

album = makeAlbum("Asad", "seenbreez")
console.log(album)