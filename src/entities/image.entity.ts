import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("images")
  class Image {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ length: "255",})
    image_url: string;
  
    @Column({ default: false })
    is_cover: boolean;
     
  }
  
  export { Image };