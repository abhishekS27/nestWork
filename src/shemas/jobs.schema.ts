/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const jobSchema = new mongoose.Schema({
  tittle: {type: String , required: true},
  salary: {type: Number , required: true},
});