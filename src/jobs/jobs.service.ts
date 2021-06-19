import { Injectable } from '@nestjs/common';
import { Job } from './interfaces/jobs.interface';
import * as mongoose from 'mongoose';
import { jobSchema } from '../shemas/jobs.schema';
// import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JobsService {
  // private jobModel: Model<Job>, // @InjectModel('Job') private readonly jobModel: Model<Job>, // @Inject('JOB_MODEL')

  async find(id: string, clientName: string): Promise<Job> {
    const jobModel = await this.createConnectionModel(clientName);
    return await jobModel.findOne({ _id: id });
  }

  async create(job: Job, clientName): Promise<Job> {
    const jobModel = await this.createConnectionModel(clientName);
    const newJob = new jobModel(job);
    return await newJob.save();
  }

  // async update(id: string, job: Job): Promise<Job> {
  //   return await this.jobModel.findByIdAndUpdate(id, job, { new: true });
  // }

  // async delete(id: string): Promise<Job> {
  //   return await this.jobModel.findByIdAndRemove({ _id: id });
  // }

  async createConnectionModel(clientName) {
    const conn = await mongoose.createConnection(
      `mongodb://localhost/${clientName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    const jobModel = conn.model<Job>('Job', jobSchema);
    return jobModel;
  }
}
