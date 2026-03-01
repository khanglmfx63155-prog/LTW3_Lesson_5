class Media {
  constructor(id, title, img, type) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.type = type;
  }

  createItem() {
    let div = document.createElement("div");
    div.className = "media-item";

    let image = document.createElement("img");
    image.src = this.img;
    image.alt = this.title;
    let name = document.createElement("h3");
    name.innerText = this.title;
    let type = document.createElement("p");
    type.innerText = "Type: " + this.type;
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(type);

    return div;
  }
}

import { ShortFilm } from "./shortfilm.js";
import { LongFilm } from "./longfilm.js";
import { Song } from "./song.js";

let mediaArray = [
  new ShortFilm("Avengers", "./asset/avengers.jpg", 9, 143),
  new LongFilm("Naruto", "./asset/naruto.jpeg", 9, 220),
  new LongFilm("One Piece", "./asset/onepiece.jpg", 10, 1000),
  new ShortFilm("Interstellar", "./asset/interstellar.jpg", 9, 169),
  new Song(
    "Có đâu ai ngờ",
    "./asset/codauaingobg.jpg",
    8,
    "./media/codauaingo.mp3"
  ),
  new Song("Đom Đóm", "./asset/domdombg.jpg", 4, "./media/domdom.mp3"),
  new Song("Đường tôi chở em về", "./asset/duongtoichoemvebg.jpg", 10, "./media/duongtoichoemve.mp3"),
  new Song("Em Mây", "./asset/emmaybg.jpg", 10, "./media/emmay.mp3"),
];
function showMedia(arr) {
  let mediaLS = document.getElementById("media-ls");
  mediaLS.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].createItem();
    mediaLS.appendChild(item);
  }
}

window.onload = function () {
  showMedia(mediaArray);
};
console.log(mediaArray);
