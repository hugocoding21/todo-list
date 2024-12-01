import { TaskStatus } from './task_status.enum';
import { IsDate, IsEnum, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  nom: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
