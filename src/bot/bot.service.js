import axios from 'axios';

const { BOT_TOKEN, BOT_API_URL, CHAT_ID } = process.env;

class BotService {
  async sendMessage(data) {
    await axios.post(`${BOT_API_URL + BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text:
        'New message from portfolio:' +
        '\n\n' +
        `${data.name} - ${data.email}` +
        '\n' +
        `<b>${data.subject}</b>` +
        '\n' +
        `<i>${data.message}</i>`,
      parse_mode: 'HTML',
    });
  }
}

export default new BotService();
