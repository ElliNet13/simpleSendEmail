function exports.sendMessage(email, password, to, subject, message) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});
var mailOptions = {
  from: email,
  to: to,
  subject: subject,
  text: message
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
    // it is good
  }
});
}
function exports.sendHTML(email, password, to, suhject, html) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});
var mailOptions = {
  from: email,
  to: to,
  subject: subject,
  html: html
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
      // it is good
  }
});
}