import { TaskStatus } from '../dto/task_status.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  description: string;

  @Column({ type: 'text' })
  status: TaskStatus;

  @Column({ nullable: true })
  date_todo: Date | null;

  @CreateDateColumn()
  date_creation: Date;

  @UpdateDateColumn({ nullable: true })
  date_modification: Date | null;
}
