module.exports = {
  style() {

    const json = require(`./../../package.json`);
    const util = require(`util`);

    const colorize  = require(`./../builder/color`);
    const format = require(`./../builder/format`);

    const author = require(`./list/author`);

    const colorist = colorize.color(`Кекс`, null, util);

    console.log(colorist);

  },


}
