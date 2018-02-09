const Color = require(`./color`);

const path = require(`path`);
const name = path.basename(process.cwd());

class Format {
  constructor(args, util){
    this._args = args;
    this._util = util;
  }

  default() {
       return this._util.format
       ( `\n%s\n%s\n%s\n`,
        `Привет пользователь!`,
        `Эта программа будет запускать сервер «{{ ${name} }}».`,
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

module.exports = Format;

