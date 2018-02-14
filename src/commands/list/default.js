module.exports = {
  name: `default`,
  description: `default action`,

  execute(app, author) {
    return [
      `Hello user!`,
      `This program triggers «{{ ${app} }}» server.`,
      `Developed by: ${author}`
    ];
  }
};
