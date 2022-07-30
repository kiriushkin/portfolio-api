import Tag from '../models/Tag.js';

class TagsService {
  async getTags() {
    return await Tag.findAll({ raw: true });
  }

  async addTag(tag) {
    return await Tag.create(tag);
  }

  async updateTag(tag) {
    return await Tag.update(tag, { where: { id: tag.id }, returning: true });
  }

  async deleteTag(id) {
    return await Tag.destroy({ where: { id } });
  }
}

export default new TagsService();
