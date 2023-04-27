import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { validateCustomerMiddleware } from './middlewares/valitate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(validateCustomerMiddleware)
      .exclude({
        path: 'customers/create',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
  }
}
