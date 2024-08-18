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
        to: "shoosh.kitany@icloud.com", // list of receivers
        subject: "Hello ✔ , Welocme to Saraha", // Subject line
        //text: "Hello world?", // plain text body
        html: "<b>Hello world ! Welocme to saraha </b>", // html body
      });
}
