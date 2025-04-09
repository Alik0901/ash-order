// src/lib/tonConnect.js
import { TonConnect } from '@tonconnect/sdk';
import WebApp from '@twa-dev/sdk';

// Telegram WebApp готов к использованию
WebApp.ready();

export const tonConnect = new TonConnect({
  manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
  walletsListSource: 'telegram', // Обязательно для работы в Telegram Mini App
});
