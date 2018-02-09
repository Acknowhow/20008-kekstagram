const Color = require(`./color`);

const path = require(`path`);
const name = path.basename(process.cwd());

class Format {
  constructor(args, util, name){
    this._args = args;
    this._util = util;
    this._name = name;
  }

  default() {
       return this._util.format
       ( `\n%s\n%s\n%s\n`,
        `Привет пользователь!`,
        `Эта программа будет запускать сервер «{{ ${this._name} }}».`,
        `Автор: Кекс.`
       )};

  help() {
       return this._util.format
      ( `\n%s\n%s\n%s\n`,
        `Доступные команды:`,
        `--help – печатает этот текст;`,
        `--version – печатает версию приложения;`
      )};

  error() {
       return new Color(this._util.format
    ( `\n%s\n%s\n`,
      `Неизвестная команда {{ ${this._args} }}`,
      `Чтобы прочитать правила использования приложения, наберите "--help"`
    ), `regexp`);
  }
}

