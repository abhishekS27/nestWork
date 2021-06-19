/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const gameSchema = new mongoose.Schema({
  game: {type: String , required: true},
  player: {type: Number , required: true},
});