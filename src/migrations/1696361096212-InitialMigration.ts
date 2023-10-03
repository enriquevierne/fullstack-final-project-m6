import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696361096212 implements MigrationInterface {
    name = 'InitialMigration1696361096212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."anoucements_fuel_enum" AS ENUM('gas', 'etanol')`);
        await queryRunner.query(`CREATE TABLE "anoucements" ("id" SERIAL NOT NULL, "brand" character varying(20) NOT NULL, "car" character varying(20) NOT NULL, "year" integer NOT NULL, "fuel" "public"."anoucements_fuel_enum" NOT NULL DEFAULT 'gas', "kilometers" integer NOT NULL, "color" character varying(20) NOT NULL, "fipe" numeric(12,2) NOT NULL DEFAULT '0', "price" numeric(12,2) NOT NULL DEFAULT '0', "description" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_6a43d195dfe08c4b1e34b88f8e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "comment_text" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "zip" character varying(45) NOT NULL, "street" character varying(45) NOT NULL, "city" character varying(120) NOT NULL, "state" character varying(2) NOT NULL, "number" character varying(10) NOT NULL, "complement" text NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image_url" character varying(255) NOT NULL, "is_cover" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "mobile" character varying(12) NOT NULL, "birthdate" date NOT NULL, "bio" text NOT NULL, "type" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_c1b20b2a1883ed106c3e746c25a" UNIQUE ("document"), CONSTRAINT "UQ_d376a9f93bba651f32a2c03a7d3" UNIQUE ("mobile"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "anoucements"`);
        await queryRunner.query(`DROP TYPE "public"."anoucements_fuel_enum"`);
    }

}
