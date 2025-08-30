# Flappy Telegram Game

Static HTML5 Flappy Bird game ready for hosting and Telegram integration.

## Repo structure
```
public/
  index.html       # the game (host on Vercel / Netlify / GitHub Pages)
vercel.json        # rewrite to serve index.html
bot.js             # Telegram bot (requires BOT_TOKEN)
package.json
.env.example
```

## Deploy steps

1. Push this repo to GitHub.
2. Deploy to Vercel (connect GitHub). The game will be served at `https://<your-vercel-domain>.vercel.app`.
3. Create a Telegram bot with @BotFather.
   - /newbot to create bot token.
   - /newgame to create a game and set short name `flappy_bird` (or change GAME_SHORT_NAME in bot.js).
4. On your server or VPS run the bot:
   - Copy `.env.example` to `.env` and set BOT_TOKEN and GAME_URL.
   - Install deps: `npm install`
   - Run: `node bot.js`
5. In Telegram chat with your bot use /start or /play.

Security: Revoke any token you already posted publicly and generate a new one.

