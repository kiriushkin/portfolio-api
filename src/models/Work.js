import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

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
  description: {
    type: DataTypes.STRING,
  },
  previewUrl: {
    type: DataTypes.STRING,
  },
  githubLink: {
    type: DataTypes.STRING,
  },
  liveLink: {
    type: DataTypes.STRING,
  },
});

try {
  await Work.sync({ alter: true });
  console.log('Work table was synced.');
} catch (err) {
  console.error(err);
}

export default Work;
