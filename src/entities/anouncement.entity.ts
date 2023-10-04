import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User, Comment, Image } from ".";


export enum FuelType {
  GAS = "gas",
  ETANOL = "etanol",
}

@Entity("anouncements")
class Anouncement {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 20 })
  brand: string;

  @Column({ length: 20 })
  car: string;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "enum", enum: FuelType, default: FuelType.GAS })
  fuel: FuelType;

  @Column({ type: "int" })
  kilometers: number;

  @Column({ length: 20 })
  color: string;

  @Column({ type: "decimal", scale: 2, precision: 12, default: 0 })
  fipe: number;

  @Column({ type: "decimal", scale: 2, precision: 12, default: 0 })
  price: number;

  @Column({ type: "text" })
  description: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null;

  @OneToMany(() => Image, (i) => i.anouncement)
  images: Array<Image>;
  
  @OneToMany(() => Comment, (c) => c.anouncement)
  comments: Array<Comment>;

  @ManyToOne(() => User, (u) => u.anouncements)
  user: User | null;
}

export { Anouncement };
