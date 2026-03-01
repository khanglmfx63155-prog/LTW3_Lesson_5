import { Media } from "./media.js";

export class ShortFilm extends Media {
  constructor(name, picture, rating, length) {
    super(name, picture, rating);
    this.length = length;
  }

  createItem() {
    let div = document.createElement("div");
    div.className = "media-item";

    div.innerHTML = `
      <img src="${this.picture}">
      <h3>${this.name}</h3>
      <p>⭐ Rating: ${this.rating}</p>
      <p>Type: Movie</p>
      <p>Length: ${this.length} phút</p>
    `;

    return div;
  }
}