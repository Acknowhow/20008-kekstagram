const json = require(`../package.json`);
const util = require(`util`);
const path = require(`path`);

const Color = require(`./../lib/color`);
const Formatist = require(`./builder/formatist`);

// Commands
const c_author = require(`./commands/author`);
const c_default = require(`./commands/default`);

const c_description = require(`./commands/description`);
const c_error = require(`./commands/error`);

const c_help = require(`./commands/help`);
const c_version = require(`./commands/help`);

const args = process.argv.slice(2);
const app = path.basename(process.cwd());

const author_cl = new Color(`Автор: Кекс`, null);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

// default
if (!args[0]) {
  console.log(new Formatist(c_default.execute(

    app, util.inspect(author_cl, {colors: true})),
    util).output());
  process.exit(0);
} else {

  switch (args[0]) {

    case `--description`:

      console.log(new Formatist(c_description.execute(
        json.description), util).output());
      process.exit(0);
      break;

    case `--author`:

      console.log(new Formatist(c_author.execute(
        json.author), util).output());
      process.exit(0);
      break;

    case `--help`:

      console.log(new Formatist(c_help.execute(
      ), util).output());
      process.exit(0);
      break;

    case `--version`:

      console.log(new Formatist(c_version.execute(
        json.version), util).output());
      process.exit(0);
      break;

    // wrong command
    default:
      // first display error message
      console.error(util.inspect(new Color(new Formatist(
        c_error.execute(args[0]), util).output(),
        `regexp`), {colors: true}));

      // then display all available commands
      console.log(new Formatist(c_help.execute(), util).output());
      process.exit(1);
  }
}
