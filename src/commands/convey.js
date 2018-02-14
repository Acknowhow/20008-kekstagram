module.exports = {
  style() {

    const json = require(`./../../package.json`);
    const util = require(`util`);
    const colorize  = require(`./../builder/color`);
    const format = require(`./../builder/format`);

    const author = require(`./list/author`);
    const help = require(`./list/help`);

    const _keks = colorize.color(`Кекс`, null, util);

    const _help = [colorize.color(`help`, `grey`, util),
      colorize.color(`вывод всех доступных команд;`, `green`, util)];

    console.log(_help);

    const _version = [colorize.color(`version`, `grey`, util),
      colorize.color(`версия приложения;`, `green`, util)];

    const _author = [colorize.color(`author`, `grey`, util),
      colorize.color(`права на разработку;`, `green`, util)];

    const _description = [colorize.color(`description`, `grey`, util),
      colorize.color(`описание приложения;`, `green`, util)];

    return {
      author: new format(author.execute(_keks), util).format(),

      help: new format(help.execute(_help, _version, _author, _description), util).format()
    }

  },

};
