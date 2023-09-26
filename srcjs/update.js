const select = (msg) => {
  if (msg.name) {
    return `[name='${msg.name}']`;
  }

  if (msg.sel) {
    return sel;
  }

  if (msg.id) {
    return `#${id}`;
  }

  return "";
};

Shiny.addCustomMessageHandler("litter-update-input", (msg) => {
  let target = select(msg);

  Object.keys(msg.props).forEach((key, index) => {
    $(target).attr(key, msg.props[key]);
  });
});
