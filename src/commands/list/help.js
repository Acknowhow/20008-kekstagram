module.exports = {
  name: `help`,
  description: `list available commands`,

  execute(help, version, author, description) {

    const [helpName, helpDescription] = help;
    const [versionName, versionDescription] = version;

    const [authorName, authorDescription] = author;
    const [descriptionName, descriptionDescription] = description;

    return [
      `Available commands:`,

      `--${helpName}        – ${helpDescription}`,
      `--${versionName}     – ${versionDescription}`,
      `--${authorName}      – ${authorDescription}`,
      `--${descriptionName} – ${descriptionDescription}`
    ];
  }
};
