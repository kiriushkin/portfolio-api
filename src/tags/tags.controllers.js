import tagsService from './tags.service.js';

class TagsControllers {
  async getTags(req, res) {
    try {
      const tags = await tagsService.getTags();

      res.send(tags);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  async addTag(req, res) {
    try {
      const { name, color } = req.body;
      if (!name || !color)
        return res
          .status(400)
          .send({ message: 'Tag name or color is missing.' });

      const result = await tagsService.addTag(req.body);

      res.status(201).send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  async updateTag(req, res) {
    try {
      if (!req.body.id)
        return res.status(400).send({ message: 'Tag id is missing.' });

      const [updatedNum, [data]] = await worksService.updateWork(req.body);

      if (updatedNum === 0)
        return res.status(404).send({ message: 'Tag not found.' });

      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  async deleteTag(req, res) {
    try {
      if (!req.body.id)
        return res.status(400).send({ message: 'Tag id is missing.' });

      const deletedAmount = await tagsService.deleteTag(req.body.id);

      if (deletedAmount === 0)
        return res.status(404).send({ message: 'Tag not found.' });

      res.send({ message: 'Work deleted successfuly.' });
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
}

export default new TagsControllers();
