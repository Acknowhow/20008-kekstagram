const util = require(`util`);
const path = require(`path`);

const Color = require(`./lib/color`);

const name = path.basename(process.cwd());
const args = process.argv.slice(2);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

const color = new Color(util.format
( `\n%s\n%s\n%s\n`,
  `Привет пользователь!`,
  `Эта программа будет запускать сервер «{{ ${name} }}».`,
  `Автор: Кекс.`
), `regexp`);


if(!args[0]) {
  console.log(util.inspect(color, {colors: true}));
  process.exit(0);
}

else {
  switch (args[0]) {
    case `--help`:
      console.log(`Доступные команды:`);
      console.log(`--help  – печатает этот текст;`);

      console.log(util.format
      ( `%s\n`,
        `--version – печатает версию приложения;`
      ));
      break;

    case `--version`:
      console.log(`v0.0.1`);
      break;

  }
}



