import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import {
  IsBoolean,
  IsNumberString,
  IsString,
  IsUrl,
  Length,
  MinLength
} from "class-validator";

@Entity()
export default class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsBoolean()
  @Column("boolean", { nullable: false })
  soldStatus: boolean = false;

  @IsString()
  @Length(5, 25)
  @Column("text", { nullable: false })
  title: string;

  @IsNumberString()
  @Column("integer", { nullable: false })
  price: number = 0;

  @IsString()
  @MinLength(10)
  @Column("text")
  @Column("text", { nullable: true })
  description: string;

  @IsUrl()
  @Column("text", { nullable: false })
  pictureUrl: string =
    "https://upload.wikimedia.org/wikipedia/en/d/d3/No-picture.jpg";
}
