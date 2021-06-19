/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const databaseProviders =
  {
    provide: 'DB_CONNECTION',
    useFactory: (): Promise<mongoose.Connection> =>
      mongoose.createConnection('mongodb://localhost/ktech',{ useNewUrlParser: true ,useUnifiedTopology: true} ),
  }
