const { Telegraf } = require("telegraf");
const GAME_SHORT_NAME = "flappy_bird"; // Set this via @BotFather > /newgame
const GAME_URL = process.env.GAME_URL || "https://your-vercel-domain.vercel.app";

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN not set in environment. Exiting.");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.replyWithGame(GAME_SHORT_NAME));
bot.command("play", (ctx) => ctx.replyWithGame(GAME_SHORT_NAME));

bot.on("callback_query", async (ctx) => {
  const q = ctx.update.callback_query;
  if (q.game_short_name === GAME_SHORT_NAME) {
    try {
      await ctx.telegram.answerGameQuery(q.id, GAME_URL);
    } catch (err) {
      console.error("answerGameQuery error:", err);
    }
  } else {
    await ctx.answerCbQuery("Unknown game");
  }
});

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

bot.launch().then(() => console.log("Bot running"));
