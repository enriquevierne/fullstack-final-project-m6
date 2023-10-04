import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Anouncement } from "./anouncement.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: "255" })
  image_url: string;

  @Column({ default: false })
  is_cover: boolean;

  @ManyToOne(() => Anouncement, (a) => a.images)
  anouncement: Anouncement;
}

export { Image };
