class Format {
  constructor(input, util) {
    this._input = input;
    this._util = util;
  }

  format() {
    return this._util.format(
        this.get(), ...this._input
    );
  }

  // get format options
  get() {
    return this._input.map((val, index, array) => {

      if (index === array.length - 1) {
        return `\n%s\n`;

      } else {

        return `\n%s`;
      }
    }).reduce((prev, curr) => {
      return prev + curr;
    });
  }
}

module.exports = Format;
