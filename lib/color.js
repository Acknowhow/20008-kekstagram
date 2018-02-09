class Color {
  constructor(string, color) {
    this.string = string;
    this.color = color;
  }

  inspect(depth, options) {
    const newOptions = Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1,

    });

    // const inner = util.inspect(this.string, newOptions);
    return `${options.stylize(this.string, this.color)}`;
  }
}
module.exports = Color;
