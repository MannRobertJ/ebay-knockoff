import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import {
  Length,
  IsString,
  MinLength,
  IsEmail,
  IsNumberString
} from "class-validator";
import { Exclude } from "class-transformer";
import * as bcrypt from "bcrypt";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @MinLength(2)
  @Column("text")
  firstName: string;

  @IsString()
  @MinLength(2)
  @Column("text")
  lastName: string;

  @IsString()
  @MinLength(2)
  @Column("text")
  displayName: string;

  @IsNumberString()
  @Length(10)
  @Column("integer")
  phoneNumber: number;

  @IsEmail()
  @Column("text")
  email: string;

  @IsString()
  @MinLength(3)
  @Column("text")
  city: string;

  @IsString()
  @MinLength(8)
  @Column("text")
  @Exclude({ toPlainOnly: true })
  password: string;

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }
}