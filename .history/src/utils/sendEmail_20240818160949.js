import nodemailer from "nodemailer";

export function sendEmail(){

    const transporter = nodemailer.createTransport({
        service:"gmail",
       
        auth: {
          user:process.env.EMAIL ,
          pass: ,
        },
      });

}
