// get login page
function getLogin(erq, res, next) {
  res.render("index", {
    title: "Login - Chat Application",
  });
}
module.exports = {
  getLogin,
};
