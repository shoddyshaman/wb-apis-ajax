import mountainSongs from './mountain.json' assert { type: "json" };

// console.log(Object.keys(mountainSongs))
// console.log(mountainSongs['results'][0])



// console.log(mountainSongs['results'][0].previewUrl)

const firstSong = mountainSongs['results'][0].trackName
console.log(Object.keys(mountainSongs['results'][0]))
// console.log(firstSong)

const firstArtist = mountainSongs['results'][0]['artistName']
console.log(`the first song is ${firstSong} by ${firstArtist}`)

for(let i = 0;i < mountainSongs['results'].length;i++){
    let song = mountainSongs['results'][i].trackName
    let artist = mountainSongs['results'][i].artistName
    console.log(`the song is ${song} by ${artist}`)
}
