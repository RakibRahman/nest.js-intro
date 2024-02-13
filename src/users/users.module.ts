import { Get, MiddlewareConsumer, Module ,RequestMethod} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { NestModule } from '@nestjs/common/interfaces';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users')
  }

  
}
