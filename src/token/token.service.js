import axios from 'axios';

const { GIT_TOKEN_URL, GIT_USER_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } =
  process.env;

class TokenService {
  async getToken(code) {
    const { data } = await axios.post(
      GIT_TOKEN_URL,
      {},
      {
        params: {
          client_id: GIT_CLIENT_ID,
          client_secret: GIT_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      }
    );

    return data.access_token;
  }

  async getUser(token) {
    const { data } = await axios.get(GIT_USER_URL, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    return data;
  }
}

export default new TokenService();
