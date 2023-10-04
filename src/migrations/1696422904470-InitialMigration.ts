import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696422904470 implements MigrationInterface {
    name = 'InitialMigration1696422904470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "mobile" character varying(12) NOT NULL, "birthdate" date NOT NULL, "bio" text NOT NULL, "type" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "addressId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_c1b20b2a1883ed106c3e746c25a" UNIQUE ("document"), CONSTRAINT "UQ_d376a9f93bba651f32a2c03a7d3" UNIQUE ("mobile"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "zip" character varying(45) NOT NULL, "street" character varying(45) NOT NULL, "city" character varying(120) NOT NULL, "state" character varying(2) NOT NULL, "number" character varying(10) NOT NULL, "complement" text NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "comment_text" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userId" integer, "anouncementId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image_url" character varying(255) NOT NULL, "is_cover" boolean NOT NULL DEFAULT false, "anouncementId" integer, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."anouncements_fuel_enum" AS ENUM('gas', 'etanol')`);
        await queryRunner.query(`CREATE TABLE "anouncements" ("id" SERIAL NOT NULL, "brand" character varying(20) NOT NULL, "car" character varying(20) NOT NULL, "year" integer NOT NULL, "fuel" "public"."anouncements_fuel_enum" NOT NULL DEFAULT 'gas', "kilometers" integer NOT NULL, "color" character varying(20) NOT NULL, "fipe" numeric(12,2) NOT NULL DEFAULT '0', "price" numeric(12,2) NOT NULL DEFAULT '0', "description" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userId" integer, CONSTRAINT "PK_c96a8cc85ae35a5f59b0eb0d272" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_55c1eee70dc5c5b6e62c37cfe99" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_019275b0b62c3f8b98e66c6d79c" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anouncements" ADD CONSTRAINT "FK_e267ed4442b36dddaff4b9f1986" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anouncements" DROP CONSTRAINT "FK_e267ed4442b36dddaff4b9f1986"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_019275b0b62c3f8b98e66c6d79c"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_55c1eee70dc5c5b6e62c37cfe99"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "anouncements"`);
        await queryRunner.query(`DROP TYPE "public"."anouncements_fuel_enum"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
