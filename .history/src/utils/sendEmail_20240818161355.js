import nodemailer from "nodemailer";

export  async function sendEmail(){

    const transporter = nodemailer.createTransport({
        service:"gmail",
       
        auth: {
          user:process.env.EMAILSENDER ,
          pass:process.env.PASSWORDSENDER ,
        },
      });


      const info = await transporter.sendMail({
        from: '"Shahd Kitany 👻" <${process.env.EMAILSENDER}>', // sender address
        to: "sh", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
}
