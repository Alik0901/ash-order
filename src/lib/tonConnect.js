import { TonConnect } from '@tonconnect/sdk';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

let instance;

export function getTonConnectInstance() {
  if (!instance) {
    instance = new TonConnect({
      manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
      walletsListSource: 'registry' // ← Обязательно ИЗМЕНИТЬ с 'telegram' на 'registry'
    });
  }
  return instance;
}
