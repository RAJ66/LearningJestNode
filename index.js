const axios = require("axios");
function helloUser(user) {
  if (user === "Vitor") {
    return `Hi`;
  } else {
    return `Hello ${user}`;
  }
}

function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  } else {
    return false;
  }
}

async function getUser() {
  const response = await axios.get("https://api.github.com/users/raj66");
  if (response.data.login) {
    return response.data.login;
  } else {
    return false;
  }
}

module.exports = { helloUser, sum, getUser };
