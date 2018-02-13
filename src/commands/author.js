module.exports = {
  name: `--author`,
  description: `Shows app author`,

  execute(author) {
    return [
      `${author}`
    ];
  }
};
