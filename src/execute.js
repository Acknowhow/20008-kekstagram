module.exports = {
  exec() {

    const json = require(`../package.json`);
    const util = require(`util`);

    const Color = require(`./../lib/color`);
    const Format = require(`./builder/format`);

    // const style = require(`./commands/style`);
    // console.log(style.author());


    // const colorize = require(`./builder/color`);
    // const auth = colorize.color(`Кекс`, null, util);

    const convey = require(`./../src/commands/convey`).style();

    console.log(convey[`help`]);
    // commands
    const cAuthor = require(`./commands/list/author`);
    const cDefault = require(`./commands/list/default`);

    const cDescription = require(`./commands/list/description`);
    const cError = require(`./commands/list/error`);

    const cHelp = require(`./commands/list/help`);
    const cVersion = require(`./commands/list/help`);

    const args = process.argv.slice(2);
    const app = json.name;

    const authorCl = new Color(`Автор: Кекс`, null);

    const splitVersion = json.version.split(`.`);

    const major = new Color(splitVersion[0], `regexp`);

    // console.log(major);

    process.on(`exit`, (code) => {
      console.log(`Exit code: ${code}`);
    });


    // default
    if (!args[0]) {
      console.log(new Format(cDefault.execute(

          app, util.inspect(
              authorCl, {colors: true})), util).format());

      process.exit(0);
    } else {

      switch (args[0]) {

        case `--description`:
          console.log(new Format(cDescription.execute(
              json.description), util).format());

          process.exit(0);
          break;

        case `--author`:
          console.log(new Format(cAuthor.execute(
              json.author), util).format());

          process.exit(0);
          break;

        case `--help`:
          console.log(new Format(cHelp.execute(
          ), util).format());

          process.exit(0);
          break;

        case `--version`:
          console.log(new Format(cVersion.execute(
              json.version), util).format());

          process.exit(0);
          break;

        // wrong command
        default:
          // first display error message
          console.error(util.inspect(
              new Color(new Format(

                  cError.execute(args[0]), util).format(),
              `regexp`), {colors: true}));

          // then display all available commands
          console.log(new Format(cHelp.execute(), util).format());
          process.exit(1);
      }
    }
  }
};

