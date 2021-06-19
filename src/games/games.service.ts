import { Inject, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './interfaces/game.interface';

@Injectable()
export class GamesService {
  constructor(
    @Inject('GAME_MODEL')
    private gameModel: Model<Game>, //   @InjectModel('Game') private readonly gameModel: Model<Game>
  ) {}

  async find(id: string): Promise<Game> {
    return await this.gameModel.findOne({ _id: id });
  }

  async create(game: Game): Promise<Game> {
    const newGame = new this.gameModel(game);
    return await newGame.save();
  }

  async update(id: string, game: Game): Promise<Game> {
    return await this.gameModel.findByIdAndUpdate(id, game, { new: true });
  }

  async delete(id: string): Promise<Game> {
    return await this.gameModel.findByIdAndRemove({ _id: id });
  }
}
