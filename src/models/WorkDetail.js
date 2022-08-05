import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import Tag from './Tag.js';
import Work from './Work.js';

const WorkDetail = sequelize.define(
  'work_detail',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Tag.hasMany(WorkDetail);
Work.hasMany(WorkDetail);

try {
  await WorkDetail.sync({ alter: true });
  console.log('Work Details table synced.');
} catch (err) {
  console.error(err);
}

export default WorkDetail;
