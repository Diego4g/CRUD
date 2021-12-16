import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddPatient1639534673218 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "fullName",
            type: "varchar",
          },
          {
            name: "gender",
            type: "enum",
            enum: ["masculine", "feminine"],
          },
          {
            name: "responsable",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "clinic",
            type: "varchar",
          },
          {
            name: "age",
            type: "numeric",
          },
          {
            name: "local",
            type: "varchar",
          },
          {
            name: "CPF",
            type: "varchar",
          },
          {
            name: "RG",
            type: "varchar",
          },
          {
            name: "CEP",
            type: "varchar",
          },
          {
            name: "status",
            type: "enum",
            enum: ["active", "finalized", "transfer"],
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKPatientUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["responsable"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients");
  }
}
