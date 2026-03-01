import { Media } from "./media.js";
export class Song extends Media {
  constructor(name, picture, rating, songURL) {
    super(name, picture, rating);
    this.songURL = songURL;
  }

  createItem() {
    let div = document.createElement("div");
    div.className = "media-item";

    div.innerHTML = `
      <img src="${this.picture}">
      <h3>${this.name}</h3>
      <p>⭐ Rating: ${this.rating}</p>
      <p>Type: Song</p>
      <audio controls>
        <source src=${this.songURL} type="audio/mpeg">
      </audio>
    `;

    return div;
  }
}
