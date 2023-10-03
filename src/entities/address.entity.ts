import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  zip: string;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 120 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 10 })
  number: string;

  @Column({ type: "text" })
  complement: string;
}

export { Address };
