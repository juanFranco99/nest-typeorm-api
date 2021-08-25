import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Task } from './task.entity';

@Injectable()
export class TaskService<Task> extends GenericService<Task> {

  constructor(@InjectRepository(Task) repository: Repository<Task>) {
    super(repository);
  }

}