/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Job extends Document {
  id?: string;
  tittle: string;
  salary: number;
}
