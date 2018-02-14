module.exports = {
  name: `error`,
  description: `unknown command`,

  execute(command) {
    return [
      `Unknown command {{ ${command} }}`,
      `Type '--help' to list available commands and description`
    ];
  }
};
