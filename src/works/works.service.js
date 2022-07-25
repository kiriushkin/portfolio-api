import axios from 'axios';
import sharp from 'sharp';
import { nanoid } from 'nanoid';
import FormData from 'form-data';
import Work from '../models/Work.js';

const {
  BROWSHOT_API_KEY,
  BROWSHOT_API_URL,
  BROWSHOT_INSTANCE_ID,
  IMGBB_API_KEY,
  IMGBB_API_URL,
} = process.env;

class WorksService {
  async getPreviewUrl(url) {
    const browResp = await axios(BROWSHOT_API_URL, {
      params: {
        key: BROWSHOT_API_KEY,
        url,
        instance_id: BROWSHOT_INSTANCE_ID,
      },
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(browResp.data);

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

  async getWorks() {
    return await Work.findAll({ raw: true });
  }

  async addWork(work) {
    return await Work.create(work);
  }

  async updateWork(work) {
    return await Work.update(work, { where: { id: work.id }, returning: true });
  }

  async deleteWork(id) {
    return await Work.destroy({ where: { id } });
  }
}

export default new WorksService();
