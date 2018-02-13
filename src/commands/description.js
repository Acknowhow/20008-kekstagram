module.exports = {
  name: `--description`,
  description: `Shows app description`,

  execute(description) {
    return [
      `${description}`
    ]
  }
};
