module.exports = {
  name: `default`,
  description: `default action`,
  execute(_app, _author) {
    return [
      `Привет пользователь!`,
      `Эта программа будет запускать сервер «{{ ${_app} }}».`,
      `${_author}`
    ]
  }
};
