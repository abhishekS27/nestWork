import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [JobsModule, GamesModule],
})
export class AppModule {}
