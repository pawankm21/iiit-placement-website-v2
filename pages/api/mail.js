import nodeMailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message, email } = req.body;
    let transporter = nodeMailer.createTransport({});
    console.log(message, email);
  }
}
