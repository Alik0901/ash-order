const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = 'https://ash-order.vercel.app';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Добро пожаловать во Врата Пепла 🔥', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🜂 Войти в Орден',
            web_app: {
              url: WEB_APP_URL,
            },
          },
        ],
      ],
    },
  });
});

bot.launch();
console.log('Бот запущен');
