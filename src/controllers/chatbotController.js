let getHomePage = (req, res) => {
  return res.send("xin chao");
};

let getWebhook = (req, res) => {};

let postWebhook = (req, res) => {};

module.exports = {
  getHomePage: getHomePage,
  getWebhook: getWebhook,
  postWebhook: postWebhook,
};
