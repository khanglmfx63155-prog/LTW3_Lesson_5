import { Media } from "./media.js";

export class LongFilm extends Media {
  constructor(name, picture, rating, episode) {
    super(name, picture, rating);
    this.episode = episode;
  }

  createItem() {
    let div = document.createElement("div");
    div.className = "media-item";

    div.innerHTML = `
      <img src="${this.picture}">
      <h3>${this.name}</h3>
      <p>⭐ Rating: ${this.rating}</p>
      <p>Type: Anime</p>
      <p>Episode: ${this.episode}</p>
    `;

    return div;
  }
}
