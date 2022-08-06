import axios from 'axios';

const { GIT_USER_URL, GIT_USER_ID_ALLOWED } = process.env;

const auth = async (req, res, next) => {
  try {
    const token = req.get('Authorization');
    if (!token) return res.status(401).send({ message: 'Token is missing.' });

    const { data } = await axios.get(GIT_USER_URL, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const result = GIT_USER_ID_ALLOWED.split(' ').find((id) => data.id === +id);

    if (!result)
      return res
        .status(403)
        .send({ message: 'You are not allowed to access.' });

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default auth;
