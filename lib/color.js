class Color {
  constructor(string, color) {
    this.string = string;
    this.color = color;
  }

  inspect(depth, options) {
    Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1,

    });

    return `${options.stylize(this.string, this.color)}`;
  }
}
module.exports = Color;
