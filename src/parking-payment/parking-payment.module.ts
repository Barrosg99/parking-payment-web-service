import { Module } from '@nestjs/common';
import { ParkingPaymentResolver } from './parking-payment.resolver';
import { ParkingPaymentService } from './parking-payment.service';

@Module({
  providers: [ParkingPaymentResolver, ParkingPaymentService]
})
export class ParkingPaymentModule {}
