import nodemailer from "nodemailer";

export function sendEmail(){

    const transporter = nodemailer.createTransport({
       
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

}
