const { Telegraf } = require('telegraf');

const BOT_TOKEN = '7781603289:AAGuT7NIls1ZCLCqWcHvQoApxX7pu0QX27M';
const WEB_APP_URL = 'https://ash-order.vercel.app';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Добро пожаловать во Врата Пепла', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Войти',
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
