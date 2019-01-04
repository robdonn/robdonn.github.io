import { SVG } from "./SVG";

export class Section {
  constructor(config) {
    this.raw = config;
    this.name = this.raw.fields.name;
    this.nameFormatted = this.raw.fields.nameFormatted;
    this.svg = new SVG(this.raw.fields.svg);
  }
}
