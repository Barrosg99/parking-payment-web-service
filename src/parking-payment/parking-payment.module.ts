import { Module } from '@nestjs/common';
import { ParkingPaymentResolver } from './parking-payment.resolver';
import { ParkingPaymentService } from './parking-payment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

import {
  ParkingPayment,
  ParkingPaymentSchema,
} from './models/parking-payment.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ParkingPayment.name, schema: ParkingPaymentSchema },
    ]),
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [ParkingPaymentResolver, ParkingPaymentService],
})
export class ParkingPaymentModule {}
