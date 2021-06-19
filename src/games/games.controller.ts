import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './interfaces/game.interface';
import { GameDTO } from './dtos/games.dtos';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}
  @Get()
  getAllJobs(): string {
    return 'AllJobs';
  }

  @Get(':id')
  getById(@Param('id') id): Promise<Game> {
    return this.gamesService.find(id);
  }

  @Post()
  saveJobs(@Body() job: GameDTO): Promise<Game> {
    return this.gamesService.create(job);
  }

  @Patch(':id')
  updateJobs(): string {
    return 'update';
  }

  @Delete(':id')
  deleteJobs(): string {
    return 'delete';
  }
}
