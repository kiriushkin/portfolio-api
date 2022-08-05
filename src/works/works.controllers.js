import worksService from './works.service.js';

class WorksControllers {
  async getWork(req, res) {
    try {
      const { name } = req.params;

      const work = await worksService.getWork(name);

      if (!work) return res.status(404).send({ message: 'Work not found.' });

      res.send(work);
    } catch (err) {
      console.error(err);
      res.send({ message: err.message });
    }
  }

  async getWorks(req, res) {
    try {
      res.send(await worksService.getWorks());
    } catch (err) {
      console.error(err);
      res.send({ message: err.message });
    }
  }

  async addWork(req, res) {
    try {
      if (!req.body.title || !req.body.name)
        return res.status(400).send({ message: 'Title or name is missing.' });

      if (req.body.liveLink)
        req.body.previewUrl = await worksService.getPreviewUrl(
          req.body.liveLink
        );

      const result = await worksService.addWork(req.body);

      if (req.body.tags)
        await worksService.addTags(result.dataValues.id, req.body.tags);

      const work = await worksService.getWork(req.body.name);

      res.status(201).send(work);
    } catch (err) {
      console.error(err);
      res.send({ message: err.message });
    }
  }

  async updateWork(req, res) {
    try {
      if (!req.body.id)
        return res.status(400).send({ message: 'Work id is missing.' });

      if (req.body.liveLink)
        req.body.previewUrl = await worksService.getPreviewUrl(
          req.body.liveLink
        );

      const [updatedNum, [data]] = await worksService.updateWork(req.body);

      if (updatedNum === 0)
        return res.status(404).send({ message: 'Work not found.' });

      if (req.body.tags)
        await worksService.updateTags(req.body.id, req.body.tags);

      const work = await worksService.getWork(req.body.name);

      res.send(work);
    } catch (err) {
      console.error(err);
      res.send({ message: err.message });
    }
  }

  async deleteWork(req, res) {
    try {
      if (!req.body.id)
        return res.status(400).send({ message: 'Work id is missing.' });

      const deletedAmount = await worksService.deleteWork(req.body.id);

      if (deletedAmount === 0)
        return res.status(404).send({ message: 'Work not found.' });

      res.send({ message: 'Work deleted successfuly.' });
    } catch (err) {
      console.error(err);
      res.send({ message: err.message });
    }
  }
}

export default new WorksControllers();
