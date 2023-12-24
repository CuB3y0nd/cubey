const axios = require('axios');

module.exports = async (name) => {
  try {
    const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);

    if (response.status === 200) {
      return response.data.id;
    }
    else {
      console.error(`Error: Unable to retrieve UUID for player ${name}`);
      return null;
    }
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};