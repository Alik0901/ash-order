import { TonConnect } from '@tonconnect/sdk';

let instance = null;

export function getTonConnectInstance() {
  if (!instance) {
    instance = new TonConnect({
      manifestUrl: 'https://ash-order.vercel.app/tonconnect-manifest.json',
      walletsListSource: 'telegram',
      environment: 'telegram'
    });
  }
  return instance;
}
