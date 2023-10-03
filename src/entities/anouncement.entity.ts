import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum FuelType {
  GAS = "gas",
  ETANOL = "etanol",
}

@Entity("anoucements")
class Anoucement {
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
}

export { Anoucement };
