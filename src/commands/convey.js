module.exports = {
  style() {
    const json = require(`./../../package.json`);
    const util = require(`util`);
    const colorize  = require(`./../builder/color`);
    const format = require(`./../builder/format`);

    // commands
    const author = require(`./list/author`);
    const help = require(`./list/help`);

    // split version to colorize it
    const versionN = json.version.split(`.`);

    console.log(colorize.color(versionN[0], `regexp`, util));

    // [colorize] N stands for command name, D for description
    const authorN = colorize.color(`Вадим Корабельник`, null, util);

    const helpD = [colorize.color(`help`, `grey`, util),
      colorize.color(`вывод всех доступных команд;`, `green`, util)];

    const versionD = [colorize.color(`version`, `grey`, util),
      colorize.color(`версия приложения;`, `green`, util)];

    const authorD = [colorize.color(`author`, `grey`, util),
      colorize.color(`автор приложения;`, `green`, util)];

    const descriptionD = [colorize.color(`description`, `grey`, util),
      colorize.color(`описание приложения;`, `green`, util)];

    return {
      author: new format(author.execute(authorN), util).format(),

      help: new format(help.execute(helpD, versionD, authorD, descriptionD), util).format(),

      version: new format()
    }

  },

};
