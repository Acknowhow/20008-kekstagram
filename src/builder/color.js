module.exports = {

  color(util) {
    const Color = require(`./../../lib/color`);

    const keks = new Color(`Кекс`, `regexp`);

    return `${util.inspect(keks, {colors: true})}`;

  }


}
