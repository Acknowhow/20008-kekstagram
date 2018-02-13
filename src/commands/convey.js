module.exports = {
  style() {

    const json = require(`./../../package.json`);
    const util = require(`util`);

    const colorize  = require(`./../builder/color`);
    const format = require(`./../builder/format`);

    const author = require(`./list/author`);

    return {
      out: colorize.color(`Кекс`, null, util),

      inner: colorize.color(`ADF`, `regexp`, util)
    }




  },



};
