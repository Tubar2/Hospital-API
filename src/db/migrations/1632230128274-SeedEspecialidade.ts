import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedEspecialidade1632230128274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO \`medicos\`.\`especialidade\` VALUES 
            (1,'Alergologia'), (2,'Angiologia'), (3,'Buco Maxilo'),
            (4,'Cardiologia clínca'), (5,'Cardiologia infantil'),
            (6,'Cirurgia cabeça e pescoço'), (7,'Cirurgia cardíaca'),
            (8,'Cirurgia de tórax');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '1');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '2');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '3');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '4');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '5');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '6');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '7');
        DELETE FROM \`medicos\`.\`especialidade\` WHERE (\`id\` = '8');
        `)
    }

}
