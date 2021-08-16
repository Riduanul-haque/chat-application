// get Inbox page
function getInbox(erq, res, next) {
  res.render("inbox", {
    title: "Inbox - Chat Application",
  });
}
module.exports = {
  getInbox,
};
