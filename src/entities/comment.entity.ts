import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
import { Anouncement, User } from ".";
  
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

    @ManyToOne(() => User, (u) => u.comments)
    user: User | null;

    @ManyToOne(() => Anouncement, (a) => a.comments)
    anouncement: Anouncement;    
  
  }
  
  export { Comment };