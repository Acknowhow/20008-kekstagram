const Format = require(`./lib/format`);
const util = require(`util`);

const args = process.argv.slice(2);
const catFormat = new Format(args[0], util);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

if(!args[0]) {
  console.log(catFormat.default());
  process.exit(0);
}

else {
  switch (catFormat) {

    case `--help`:
      console.log(catFormat.help());
      process.exit(0);
      break;

    case `--version`:
      console.log(`v0.0.1`);
      process.exit(0);
      break;

    default:
      console.error(util.inspect(catFormat.error(), {colors: true}));
      process.exit(1);

  }
}



