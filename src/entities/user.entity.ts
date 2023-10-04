import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Address, Anouncement, Comment } from ".";


@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 11, unique: true })
  document: string;

  @Column({ length: 12, unique: true })
  mobile: string;

  @Column({ type: "date" })
  birthdate: string;

  @Column({ type: "text" })
  bio: string;

  @Column({ default: false })
  type: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Comment, (c) => c.user)
  comments: Array<Comment>;

  @OneToMany(() => Anouncement, (a) => a.user)
  anouncements: Array<Anouncement>;


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRound: number = getRounds(this.password);
    if (!hasRound) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
