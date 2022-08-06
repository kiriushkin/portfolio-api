import tokenService from './token.service.js';

class TokenControllers {
  async getToken(req, res) {
    try {
      if (!req.query.code)
        return res.status(400).send({ message: 'Code is missing' });

      const token = await tokenService.getToken(req.query.code);

      res.send(token);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async getUser(req, res) {
    try {
      if (!req.body.token)
        return res.status(400).send({ message: 'Token is missing' });

      const resp = await tokenService.getUser(req.body.token);

      res.send(resp);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  auth(req, res) {
    res.send({ message: 'Successful authentication.' });
  }
}

export default new TokenControllers();
