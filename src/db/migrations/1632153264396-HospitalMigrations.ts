import {MigrationInterface, QueryRunner} from "typeorm";

export class HospitalMigrations1632153264396 implements MigrationInterface {
    name = 'HospitalMigrations1632153264396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`especialidade\` DROP COLUMN \`bla\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`especialidade\` ADD \`bla\` varchar(255) NOT NULL`);
    }

}
