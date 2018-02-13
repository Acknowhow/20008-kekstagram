class Format {
  constructor(input, util) {
    this._input = input;
    this._util = util;
  }

  output() {
    return this._util.format(
        this._format(), ...this._input
    );
  }

  // get format options
  _format() {
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
