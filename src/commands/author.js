module.exports = {
  name: `--author`,
  description: `Shows app author`,

  execute(_author) {
    return [
      `${_author}`
    ]
  }
};
