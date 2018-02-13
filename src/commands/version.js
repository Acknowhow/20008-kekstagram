module.exports = {
  name: `--version`,
  description: `Shows program version`,

  execute(_version) {
    return [
      `${_version}`
    ]
  }
};
