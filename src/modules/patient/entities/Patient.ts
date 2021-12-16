import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../users/entities/User";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

enum Gender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
}

@Entity("patients")
class Patient {
  @PrimaryColumn()
  id: string;

  @Column()
  fullName: string;

  @Column({ type: "enum", enum: Gender })
  gender: Gender;

  @ManyToOne(() => User)
  @JoinColumn({ name: "responsable" })
  user: User;

  @Column()
  responsable: string;

  @Column()
  clinic: string;

  @Column()
  age: number;

  @Column()
  local: string;

  @Column()
  CPF: string;

  @Column()
  RG: string;

  @Column()
  CEP: string;

  @Column({ type: "enum", enum: Situation })
  status: Situation;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
