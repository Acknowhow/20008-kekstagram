module.exports = {
  name: `--version`,
  description: `Shows program version`,

  execute(version) {
    return [
      `${version}`
    ];
  }
};
