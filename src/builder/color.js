module.exports = {
  color(string, color, util) {

    const Color = require(`./../../lib/color`);
    const colorized = new Color(`${string}`, `${color}`);

    util.inspect.styles.boolean = `blue`;
    util.inspect.styles.name = `cyan`;

    return `${util.inspect(colorized, {colors: true})}`;
  }
};
