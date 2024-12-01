import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  civilite: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ type: 'date', nullable: true })
  date_de_naissance: Date | null;

  @Column()
  email: string;

  @Column()
  password: string;
}
