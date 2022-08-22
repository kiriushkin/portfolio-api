import botService from './bot.service.js';

class BotControllers {
  async sendMessage(req, res) {
    try {
      if (!req.body)
        return res.status(400).send({ message: 'Request body is missing.' });

      await botService.sendMessage(req.body);

      res.send('Success');
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new BotControllers();
