import { Injectable, NestMiddleware } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.headers.apikey = 'correctKey'
    console.log('Req in users route', req.headers.apikey)

    if (!req.headers.apikey) {
      throw new HttpException('Unauthorized Access', HttpStatus.FORBIDDEN)
    }
    if (req.headers.apikey === 'correctKey') {
      next();
    } else {
      throw new HttpException('Invalid API KEY', HttpStatus.BAD_REQUEST)

    }
  }
}
