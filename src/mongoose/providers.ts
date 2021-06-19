/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { jobSchema } from '../shemas/jobs.schema';
import { gameSchema } from '../shemas/games.schema';

export const providers = [
  {
    provide: 'JOB_MODEL',
    useFactory: (connection: Connection) => connection.model('Job', jobSchema),
    inject: ['DB_CONNECTION'],
  }, {
    provide: 'GAME_MODEL',
    useFactory: (connection: Connection) => connection.model('Game', gameSchema),
    inject: ['DB_CONNECTION'],
  },
];
