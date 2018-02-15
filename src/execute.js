const convey = require(`./../src/commands/convey`);
const args = process.argv.slice(2);

exports.exec = () => {

  process.on(`exit`, (code) => {
    console.log(`Exit code: ${code}`);
  });

  if (!args[0]) {
    console.log(convey.convey()[`def`]);

    process.exit(0);
  } else {

    switch (args[0]) {

      case `--description`:
        console.log(convey.convey()[`description`]);
        process.exit(0);
        break;

      case `--author`:
        console.log(convey.convey()[`author`]);
        process.exit(0);
        break;

      case `--help`:
        console.log(convey.convey()[`help`]);
        process.exit(0);
        break;

      case `--version`:
        console.log(convey.convey()[`version`]);
        process.exit(0);
        break;

      default:
        console.error(convey.convey()[`error`](args[0]));
        console.log(convey.convey()[`help`]);
        process.exit(1);
    }
  }
};

