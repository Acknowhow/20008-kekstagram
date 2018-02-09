const path = require(`path`);
const util = require(`util`);

const name = path.basename(process.cwd());
const args = process.argv.slice(2);

process.on(`exit`, (code) => {
  console.log(`Exit code: ${code}`);
});

if(!args[0]) {
  console.log(util.format
  ( `%s\n%s\n%s`,
    `Привет пользователь!`,
    `Эта программа будет запускать сервер «{{ ${name} }}».`,
    `${util.inspect(`e`)}Автор: Кекс.`
  ));
  process.exit(0);
}

else {
  switch (args[0]) {
    case `--help`:
      console.log(util.format(
        `Доступные команды:\n`

      ));
      console.log(`--help  – печатает этот текст;`);
      console.log(`--version – печатает версию приложения`);
      break;
    case `--version`:
      console.log(`v0.0.1`);

  }
}



