import nodemailer from "nodemailer";

export  async function sendEmail(to,userName){

    const transporter = nodemailer.createTransport({
        service:"gmail",
       
        auth: {
          user:process.env.EMAILSENDER ,
          pass:process.env.PASSWORDSENDER ,
        },
      });


      const info = await transporter.sendMail({
        from: '"Shahd Kitany 👻" <${process.env.EMAILSENDER}>', // sender address
       // to: "shoosh.kitany@icloud.com", // list of receivers
       //to:to,
        to,
        subject: "Hello ✔ ", // Subject line
        //text: "Hello world?", // plain text body
        html: `<h2 style='color:pink'>Hello ${userName}! Welcome to Saraha!</h2>`, // محتوى HTML مع اسم المستخدم
      });
}
