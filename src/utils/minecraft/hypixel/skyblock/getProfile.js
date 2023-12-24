const axios = require('axios');
const dotenv = require('dotenv');
const uuid = require('../../uuid');

module.exports = async (name) => {

  dotenv.config();

  const UUID = await uuid(`${name}`);
  const API_KEY = process.env.HYPIXEL_API_KEY;

  try {
    const response = await axios.get(`https://api.hypixel.net/v2/skyblock/profiles?key=${API_KEY}&uuid=${UUID}`);

    if (response.status === 200) {
      return response.data;
    }
    else {
      console.error(`Error: Unable to retrieve Profile for player ${name}`);
      return null;
    }
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};