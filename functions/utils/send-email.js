const sgMail = require("@sendgrid/mail");
const functions = require("firebase-functions");

sgMail.setApiKey(functions.config().sendgrid.key);

module.exports = function sendEmail(email, message) {
  const msg = {
    to: "anna.morawska@mooncascade.com",
    from: email,
    subject: "Sent with Moon Assistant",
    text: message
  };
  sgMail.send(msg);
};
