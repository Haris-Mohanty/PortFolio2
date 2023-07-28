const nodeMailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//Transport
const transporter = nodeMailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //Validation

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error!",
      err,
    });
  }
};

module.exports = { sendEmailController };
