import { IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

enum Civility {
  HOMME = 'Mr.',
  FEMME = 'Mme',
}

export class CreateUserDto {
  @IsEnum(Civility)
  civilite: Civility;

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsDate()
  @IsOptional()
  date_de_naissance: Date | null;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
