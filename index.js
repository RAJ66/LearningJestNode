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

module.exports = { helloUser, sum };
