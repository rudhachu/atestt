const { Alpha, mention, personalDB, config } = require("../lib");

Alpha(
  {
    pattern: "mention ?(.*)",
    on: "all",
    allowBot: true,
    fromMe: false,
  },
  async (message, match) => {
    if (message.command && message.isCreator && !message.isBot && message.command.includes("mention") && match.toLowerCase() == "get"
    ) {
      const { mention } = await personalDB(["mention"], { content: {} }, "get");
      if (!mention || mention.status == "false") return await message.reply(`_*Example: mention on* to activates mention_`,);
      return await message.reply(mention.message || "there are no mention messages",
      );
    } else if (message.isCreator && !message.isBot && message.command && message.command.includes("mention") && match.toLowerCase() == "off"
    ) {
      const { mention } = await personalDB(["mention"], { content: {} }, "get");
      if (!mention || mention.status == "false")
        return await message.reply(`_Mention message not set_`,);
      await personalDB( ["mention"], { content: { status: "false", message: mention.message } }, "set",
      );
      return await message.reply("_mention deactivated_");
    } else if (message.isCreator && !message.isBot && message.command && message.command.includes("mention") && match.toLowerCase() == "on"
    ) {
      const { mention } = await personalDB(["mention"], { content: {} }, "get");
      if (mention && mention.status == "true")
        return await message.reply(`_mention already activated_`,);
      await personalDB(
        ["mention"],
        { content: { status: "true", message: mention?.message } },
        "set",
      );
      return await message.reply("_mention activated_");
    } else if (message.isCreator && !message.isBot && message.command && message.command.includes("mention") && match != ""
    ) {
      const { mention } = await personalDB(["mention"], { content: {} }, "get");
      const status = mention && mention.status == "true" ? "true" : "false";
      await personalDB(
        ["mention"],
        { content: { status, message: match } },
        "set",
      );
      return await message.reply("_mention updated_");
    }
    if (!message.mention.isOwner) return;
    const { mention: msg } = await personalDB(
      ["mention"],
      { content: {} },
      "get",
    );
    if (!msg || msg.status == "false" || !msg.message) return;
    return await mention(message, msg.message);
  },
);

