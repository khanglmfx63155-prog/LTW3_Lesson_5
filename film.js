import { Media } from "./media.js";

export class Film extends Media {
  constructor(name, picture, rating, length) {
    super(name, picture, rating, length);
  }
}
