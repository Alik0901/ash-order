import { TonConnect } from '@tonconnect/sdk';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

let instance;

export function getTonConnectInstance() {
  if (!instance) {
    instance = new TonConnect({
      manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
      walletsListSource: 'https://ton-connect.github.io/wallets-list/wallets.json' // ✅ Указать напрямую
    });
  }
  return instance;
}
