module.exports = {
  convey() {
    // concrete
    const json = require(`./../../package.json`);
    const util = require(`util`);

    // builder
    const colorize = require(`./../builder/color`);
    const Format = require(`./../builder/format`);

    // commands
    const def = require(`./list/default`);
    const author = require(`./list/author`);

    const help = require(`./list/help`);
    const version = require(`./list/version`);

    const description = require(`./list/description`);
    const error = require(`./list/error`);

    // C stands for `colorized`
    const appC = colorize.color(json.name, `name`, util);
    const authorC = colorize.color(json.author, null, util);

    const [majorC, minorC, patchC] = json.version.split(`.`);

    const versionC = colorize.color(majorC, `regexp`, util) +
        `.` + colorize.color(minorC, `string`, util) +
        `.` + colorize.color(patchC, `boolean`, util);

    const descriptionC = colorize.color(json.description, null, util);

    // all commands list
    const helpHelpC = [colorize.color(help.name, `undefined`, util),
      colorize.color(help.description, `string`, util)];

    const helpVersionC = [colorize.color(version.name, `undefined`, util),
      colorize.color(version.description, `string`, util)];

    const helpAuthorC = [colorize.color(author.name, `undefined`, util),
      colorize.color(author.description, `string`, util)];

    const helpDescriptionC = [colorize.color(description.name, `undefined`, util),
      colorize.color(description.description, `string`, util)];

    return {

      def: new Format(def.execute(
          appC, authorC), util).format(),

      author: new Format(author.execute(
          authorC), util).format(),

      help: new Format(help.execute(helpHelpC, helpVersionC,
          helpAuthorC, helpDescriptionC), util).format(),

      version: new Format(version.execute(
          versionC), util).format(),

      description: new Format(description.execute(
          descriptionC), util).format(),

      error: (command) => colorize.color(`${new Format(error.execute(
          command), util).format()}`, `regexp`, util)
    };
  }
};
