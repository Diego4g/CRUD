import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../users/entities/User";
import { Patient } from "./Patient";

@Entity("EvolutionPatient")
class PatientEvolution {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: "patient_id" })
  patient: Patient;

  @Column()
  patient_id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { PatientEvolution };
