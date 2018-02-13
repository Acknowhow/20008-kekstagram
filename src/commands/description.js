module.exports = {
  name: `--description`,
  description: `Shows app description`,

  execute(_description) {
    return [
      `${_description}`
    ]
  }
};
