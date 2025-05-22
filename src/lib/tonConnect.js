// src/lib/tonConnect.js
import { TonConnect } from '@tonconnect/sdk';
import { TelegramProvider } from '@tonconnect/sdk/providers/telegram';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

export const tonConnect = new TonConnect({
  manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
  walletConnectParameters: {
    provider: new TelegramProvider() // Принудительно задаём Telegram-провайдер
  }
});
