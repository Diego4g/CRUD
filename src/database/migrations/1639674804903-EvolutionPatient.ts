import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EvolutionPatient1639674804903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "EvolutionPatient",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "patient_id",
            type: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],

        foreignKeys: [
          {
            name: "FKPacientEvolution",
            referencedTableName: "patients",
            referencedColumnNames: ["id"],
            columnNames: ["patient_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKUserEvolution",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("EvolutionPatient");
  }
}
