import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

let ServerResponseTime: number;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getServerResponseTime(): number {
    return ServerResponseTime;
  }
}

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    return next
      .handle()
      .pipe(tap(() => ServerResponseTime = Date.now() - startTime));
  }
}

