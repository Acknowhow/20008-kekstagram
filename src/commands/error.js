module.exports = {
  name: `error`,
  description: `unknown command`,
  execute(command) {
    return [
      `Неизвестная команда {{ ${command} }}`,
      `Чтобы прочитать правила использования приложения, наберите "--help"`
    ];
  }
};
