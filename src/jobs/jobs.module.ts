import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { DatabaseModule } from '../mongoose/database.module';
import { providers } from '../mongoose/providers';

@Module({
  imports: [DatabaseModule],
  controllers: [JobsController],
  providers: [JobsService, ...providers],
})
export class JobsModule {}
