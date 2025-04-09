import { TonConnect } from '@tonconnect/sdk';

export const tonConnect = new TonConnect({
  manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
  walletsListSource: 'telegram', // Это обязательно
});
