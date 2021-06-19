import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { DatabaseModule } from '../mongoose/database.module';
import { providers } from '../mongoose/providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, ...providers],
})
export class GamesModule {}
