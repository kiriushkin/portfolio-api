import { Sequelize } from 'sequelize';

const { HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
