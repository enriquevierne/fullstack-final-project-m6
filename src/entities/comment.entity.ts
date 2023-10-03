import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("comments")
  class Comment {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ type: "text",})
    comment_text: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string;
  
    @DeleteDateColumn({ type: "date" })
    deletedAt: string | null;
  
  }
  
  export { Comment };