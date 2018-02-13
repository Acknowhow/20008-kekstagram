module.exports = {
  name: `default`,
  description: `default action`,
  execute(app, author) {
    return [
      `Привет пользователь!`,
      `Эта программа будет запускать сервер «{{ ${app} }}».`,
      `${author}`
    ]
  }
};
