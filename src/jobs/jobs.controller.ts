import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Headers,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
// import { JobDTO } from './dtos/jobs.dtos';
import { Job } from './interfaces/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getAllJobs(): string {
    return 'AllJobs';
  }

  @Get(':id')
  getById(@Param('id') id, @Headers('domain') name): Promise<Job> {
    return this.jobsService.find(id, name);
  }

  @Post()
  saveJobs(@Body() job: Job, @Headers('domain') name): Promise<Job> {
    return this.jobsService.create(job, name);
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
