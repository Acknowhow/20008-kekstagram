module.exports = {
  exec() {

    const json = require(`../package.json`);
    const util = require(`util`);

    const Color = require(`./../lib/color`);
    const Format = require(`./builder/format`);


    // commands
    const cAuthor = require(`./commands/author`);
    const cDefault = require(`./commands/default`);

    const cDescription = require(`./commands/description`);
    const cError = require(`./commands/error`);

    const cHelp = require(`./commands/help`);
    const cVersion = require(`./commands/help`);

    const args = process.argv.slice(2);
    const app = json.name;

    const authorCl = new Color(`Автор: Кекс`, null);

    const splitVersion = json.version.split(`.`);

    const major = new Color(splitVersion[0], `regexp`);

    console.log(major);



    process.on(`exit`, (code) => {
      console.log(`Exit code: ${code}`);
    });


    // default
    if (!args[0]) {
      console.log(new Format(cDefault.execute(

          app, util.inspect(
              authorCl, {colors: true})), util).output());

      process.exit(0);
    } else {

      switch (args[0]) {

        case `--description`:
          console.log(new Format(cDescription.execute(
              json.description), util).output());

          process.exit(0);
          break;

        case `--author`:
          console.log(new Format(cAuthor.execute(
              json.author), util).output());

          process.exit(0);
          break;

        case `--help`:
          console.log(new Format(cHelp.execute(
          ), util).output());

          process.exit(0);
          break;

        case `--version`:
          console.log(new Format(cVersion.execute(
              json.version), util).output());

          process.exit(0);
          break;

        // wrong command
        default:
          // first display error message
          console.error(util.inspect(
              new Color(new Format(

                  cError.execute(args[0]), util).output(),
              `regexp`), {colors: true}));

          // then display all available commands
          console.log(new Format(cHelp.execute(), util).output());
          process.exit(1);
      }
    }
  }
};

