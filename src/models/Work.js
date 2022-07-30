import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import Tag from './Tag.js';

const Work = sequelize.define('work', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  previewUrl: {
    type: DataTypes.STRING,
  },
  githubLink: {
    type: DataTypes.STRING,
  },
  apiLink: {
    type: DataTypes.STRING,
  },
  liveLink: {
    type: DataTypes.STRING,
  },
});

try {
  Tag.hasMany(Work);
  await Work.sync({ alter: true });
  console.log('Work table synced.');
} catch (err) {
  console.error(err);
}

export default Work;
