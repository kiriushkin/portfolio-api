import axios from 'axios';
import sharp from 'sharp';
import { nanoid } from 'nanoid';
import FormData from 'form-data';
import { Op } from 'sequelize';
import Work from '../models/Work.js';
import WorkDetail from '../models/WorkDetail.js';

const { SCREENSHOT_API_KEY, SCREENSHOT_API_URL, IMGBB_API_KEY, IMGBB_API_URL } =
  process.env;

class WorksService {
  async getPreviewUrl(url) {
    const shotResp = await axios(SCREENSHOT_API_URL, {
      params: {
        access_key: SCREENSHOT_API_KEY,
        url,
        wait_until: 'page_loaded',
        width: 1350,
        height: 900,
      },
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(shotResp.data);

    const newBuffer = await sharp(buffer).webp().toBuffer();

    const data = new FormData();
    data.append('image', newBuffer, 'image');

    const imgbbResp = await axios({
      url: IMGBB_API_URL,
      method: 'post',
      params: { key: IMGBB_API_KEY, name: nanoid(8) },
      headers: { ...data.getHeaders() },
      data,
    });

    return imgbbResp.data.data.url;
  }

  async getWork(name) {
    const work = await Work.findOne({ where: { name }, raw: true });
    const tags = await WorkDetail.findAll({
      raw: true,
      where: { workId: work.id, tagId: { [Op.ne]: null } },
      attributes: [['tagId', 'id']],
    });

    work.tags = tags.map((tag) => tag.id);

    return work;
  }

  async getWorks() {
    const works = await Work.findAll({ raw: true });
    for (let work of works) {
      const tags = await WorkDetail.findAll({
        raw: true,
        where: { workId: work.id, tagId: { [Op.ne]: null } },
        attributes: [['tagId', 'id']],
      });

      work.tags = tags.map((tag) => tag.id);
    }

    return works;
  }

  async addWork(work) {
    return await Work.create(work);
  }

  async addTags(workId, tags) {
    const responses = [];
    tags.forEach((tagId) =>
      responses.push(WorkDetail.create({ workId, tagId }))
    );

    await Promise.all(responses);
  }

  async updateWork(work) {
    return await Work.update(work, { where: { id: work.id }, returning: true });
  }

  async updateTags(workId, tags) {
    const responses = [];
    await WorkDetail.destroy({ where: { workId } });
    tags.forEach((tagId) =>
      responses.push(WorkDetail.create({ workId, tagId }))
    );

    await Promise.all(responses);
  }

  async deleteWork(id) {
    return await Work.destroy({ where: { id } });
  }
}

export default new WorksService();
