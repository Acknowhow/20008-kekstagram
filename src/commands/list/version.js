module.exports = {
  name: `version`,
  description: `program version`,

  execute(version) {
    return [
      `${version}`
    ];
  }
};
