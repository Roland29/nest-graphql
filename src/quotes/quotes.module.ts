import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesResolver } from './quotes.resolver';

@Module({
  providers: [QuotesService, QuotesResolver],
})
export class QuotesModule {}
