import { Injectable } from '@nestjs/common';
import { EbsiWallet } from '@cef-ebsi/wallet-lib';

@Injectable()
export class AppService {
  getHello(): string {
    const did = EbsiWallet.createDid();
    console.log(did);
    return 'Hello World!';
  }
}
