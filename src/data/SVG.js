export class SVG {
  constructor(config) {
    this.raw = config;
    this.markup = this.raw.fields.markup;
    this.name = this.raw.fields.name;
    this.description = this.raw.fields.description;
  }
}
