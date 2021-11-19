import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize("sqlite::memory:");

interface ExampleInterface {
  message: string;
  randomNumber: number;
}

export class Example extends Model<
  ExampleInterface & { id: number },
  ExampleInterface
> {
  public id!: number;
  public message!: string;
  public randomNumber!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  toJSON() {
    const { message, randomNumber } = this;
    return { message, randomNumber };
  }
}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: new DataTypes.STRING(256),
    },
    randomNumber: {
      type: DataTypes.FLOAT,
    },
  },
  { sequelize }
);
