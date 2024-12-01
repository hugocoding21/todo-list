import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsString, IsEnum, IsDate } from 'class-validator';
import { TaskStatus } from './task_status.enum';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  nom: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsDate()
  date_todo: Date | null;

  @IsDate()
  date_modification: Date;

  @IsDate()
  date_fin: Date | null;
}
