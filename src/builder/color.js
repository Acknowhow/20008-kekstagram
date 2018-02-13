module.exports = {
  color(string, color, util) {

    const Color = require(`./../../lib/color`);
    const colorized = new Color(`${string}`, `${color}`);

    return `${util.inspect(colorized, {colors: true})}`;
  }
}
