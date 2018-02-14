module.exports = {
  exec() {

    const convey = require(`./../src/commands/convey`).convey();
    const args = process.argv.slice(2);

    process.on(`exit`, (code) => {
      console.log(`Exit code: ${code}`);
    });

    if (!args[0]) {
      console.log(convey[`def`]);

      process.exit(0);
    } else {

      switch (args[0]) {

        case `--description`:
          console.log(convey[`description`]);
          process.exit(0);
          break;

        case `--author`:
          console.log(convey[`author`]);
          process.exit(0);
          break;

        case `--help`:
          console.log(convey[`help`]);
          process.exit(0);
          break;

        case `--version`:
          console.log(convey[`version`]);
          process.exit(0);
          break;

        default:
          console.error(convey[`error`](args[0]));
          console.log(convey[`help`]);
          process.exit(1);
      }
    }
  }
};

