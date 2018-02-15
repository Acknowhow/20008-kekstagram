class Color {
  constructor(string, color) {
    this.string = string;
    this.color = color;
  }

  inspect(param, options) {
    return `${options.stylize(this.string, this.color)}`;
  }
}
module.exports = Color;
