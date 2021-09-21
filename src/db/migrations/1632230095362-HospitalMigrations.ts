import {MigrationInterface, QueryRunner} from "typeorm";

export class HospitalMigrations1632230095362 implements MigrationInterface {
    name = 'HospitalMigrations1632230095362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`medicos\`.\`medico\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(120) NOT NULL, \`crm\` varchar(7) NOT NULL, \`cep\` varchar(11) NOT NULL, \`tel_fixo\` varchar(25) NOT NULL, \`tel_celular\` varchar(25) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`medicos\`.\`especialidade\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`medicos\`.\`Medico_has_Especialidades\` (\`medicoId\` int NOT NULL, \`especialidadeId\` int NOT NULL, INDEX \`IDX_646091680d2bea2da238d1556f\` (\`medicoId\`), INDEX \`IDX_ad47a554584effa37431e474dc\` (\`especialidadeId\`), PRIMARY KEY (\`medicoId\`, \`especialidadeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`Medico_has_Especialidades\` ADD CONSTRAINT \`FK_646091680d2bea2da238d1556f5\` FOREIGN KEY (\`medicoId\`) REFERENCES \`medicos\`.\`medico\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`Medico_has_Especialidades\` ADD CONSTRAINT \`FK_ad47a554584effa37431e474dc5\` FOREIGN KEY (\`especialidadeId\`) REFERENCES \`medicos\`.\`especialidade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`Medico_has_Especialidades\` DROP FOREIGN KEY \`FK_ad47a554584effa37431e474dc5\``);
        await queryRunner.query(`ALTER TABLE \`medicos\`.\`Medico_has_Especialidades\` DROP FOREIGN KEY \`FK_646091680d2bea2da238d1556f5\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad47a554584effa37431e474dc\` ON \`medicos\`.\`Medico_has_Especialidades\``);
        await queryRunner.query(`DROP INDEX \`IDX_646091680d2bea2da238d1556f\` ON \`medicos\`.\`Medico_has_Especialidades\``);
        await queryRunner.query(`DROP TABLE \`medicos\`.\`Medico_has_Especialidades\``);
        await queryRunner.query(`DROP TABLE \`medicos\`.\`especialidade\``);
        await queryRunner.query(`DROP TABLE \`medicos\`.\`medico\``);
    }

}
