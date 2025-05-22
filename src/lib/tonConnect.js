// src/lib/tonConnect.js
import { TonConnect } from '@tonconnect/sdk';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

export const tonConnect = new TonConnect({
  manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
  walletsListSource: 'telegram' // ВАЖНО: иначе SDK не определяет окружение
});
