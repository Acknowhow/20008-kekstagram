module.exports = {
  name: `error`,
  description: `unknown command`,
  execute(_command) {
    return [
      `Неизвестная команда {{ ${_command} }}`,
      `Чтобы прочитать правила использования приложения, наберите "--help"`
    ]
  }
};
