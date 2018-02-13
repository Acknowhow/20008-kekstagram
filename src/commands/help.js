module.exports = {
  name: `--help`,
  description: `Shows all commands`,

  execute() {
    return [
      `Доступные команды:`,
      `--help        – вывод всех доступных команд;`,
      `--version     – версия приложения;`,
      `--author      – права на разработку;`,
      `--description – описание приложения`
    ];
  }
};
