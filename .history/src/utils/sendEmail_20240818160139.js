import nodemailer from "nodemailer";

export function sendEmail(){

    const transporter = nodemailer.createTransport({
        service:"gmail",
       
        auth: {
          user: "kitanyshah",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

}
