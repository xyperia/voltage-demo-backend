import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity("M_USER")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ unique: true })
  USERNAME: string;

  @Column()
  PASSWORD: string;

  @Column()
  ROLE_ID: string;

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.PASSWORD);
  }
}
