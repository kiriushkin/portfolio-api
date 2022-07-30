import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Tag = sequelize.define('tag', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  await Tag.sync({ alter: true });
  console.log('Tag table synced.');
} catch (err) {
  console.error(err);
}

export default Tag;
