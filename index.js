const util = require(`util`);
const path = require(`path`);

const Color = require(`./lib/color`);

const name = path.basename(process.cwd());
const args = process.argv.slice(2);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

const _default = util.format
( `\n%s\n%s\n%s\n`,
  `Привет пользователь!`,
  `Эта программа будет запускать сервер «{{ ${name} }}».`,
  `Автор: Кекс.`
);

const _help = util.format
( `\n%s\n%s\n%s\n`,
  `Доступные команды:`,
  `--help – печатает этот текст;`,
  `--version – печатает версию приложения;`
);

const _error = new Color(util.format
( `\n%s\n%s\n`,
  `Неизвестная команда {{ ${args[0]} }}`,
  `Чтобы прочитать правила использования приложения, наберите "--help"`
), `regexp`);


if(!args[0]) {
  console.log(_default);
  process.exit(0);
}

else {
  switch (args[0]) {

    case `--help`:
      console.log(_help);
      process.exit(0);
      break;

    case `--version`:
      console.log(`v0.0.1`);
      break;

    default:
      console.error(util.inspect(_error, {colors: true}));
      process.exit(1);

  }
}



