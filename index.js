const format = require(`./lib/format`);
const util = require(`util`);

const args = process.argv.slice(2);

const Format = format(args[0], util);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

if(!Format) {
  console.log(Format._default);
  process.exit(0);
}

else {
  switch (Format) {

    case `--help`:
      console.log(Format._help);
      process.exit(0);
      break;

    case `--version`:
      console.log(`v0.0.1`);
      process.exit(0);
      break;

    default:
      console.error(util.inspect(Format._error, {colors: true}));
      process.exit(1);

  }
}



