/*
Problem Statement

Create a plylist constructor that initializes with an empty songs array. Add a method addSong(song) to the prototype that adds a new song to the playlist.

Challenges:
    * Implement a constructor function playlist that initializes an empty song array.
    * Attach a method addSong(song) to  its prototype that adds the song to the songs array.
*/


//You need to implement the Playlist constructor function and its prototype method
function Playlist(){
    this.songs = []
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song){
    this.songs.push(song)
}

