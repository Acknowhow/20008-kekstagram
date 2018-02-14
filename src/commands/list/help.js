module.exports = {
  name: `--help`,
  description: `Shows all commands`,

  execute(help, version, author, description) {
    return [
      `Доступные команды:`,

      `--${help[0]}        – ${help[1]}`,
      `--${version[0]}     – ${version[1]}`,
      `--${author[0]}      – ${author[1]}`,
      `--${description[0]} – ${description[1]}`
    ];
  }
};
