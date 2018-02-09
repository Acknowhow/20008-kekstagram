const args = process.argv.slice(2);

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

if(!args[0]) {
  console.log(`Привет пользователь!` +
              `Эта программа будет запускать сервер` +
               `«{{ имя вашего проекта }}».` +
               `Автор: Кекс.`);
  process.exit(0);
}

else {
  switch (args[0]) {
    case `--help`:
      console.log(`Доступные команды:`);
      console.log(`--help  – печатает этот текст;`);
      console.log(`--version – печатает версию приложения`);
      break;
    case `--version`:
      console.log(`v0.0.1`);

  }
}



