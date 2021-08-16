// get users page
function getUsers(erq, res, next) {
  res.render("Users", {
    title: "Users - Chat Application",
  });
}
module.exports = {
  getUsers,
};
