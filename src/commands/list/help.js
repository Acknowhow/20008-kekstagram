module.exports = {
  name: `help`,
  description: `list available commands`,

  execute(help, version, author, description) {
    return [
      `Available commands:`,

      `--${help[0]}         – ${help[1]}`,
      `--${version[0]}      – ${version[1]}`,
      `--${author[0]}       – ${author[1]}`,
      `--${description[0]}  – ${description[1]}`
    ];
  }
};
