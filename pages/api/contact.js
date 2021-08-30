    
export default function (req, res) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')
  
    if (req.method === 'POST') {
      const transporter = nodemailer.createTransport({
        port: 465,     
        host: "smtp.gmail.com",
           auth: {
                user: 'jasix2024@gmail.com',
                pass: process.env.password,
             },
        secure: true,
      });
      
      const mailData = {
          from: 'jasix2024@gmail.com',
          to: 'yasamanforouzesh93@gmail.com',
          subject: `Portfolio Message From ${req.body.name}`,
          text: req.body.body,
          html: `<div>${req.body.body}</div><p>Sent from: ${req.body.email}</p>`
      }
  
      transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info);
      })
  
      const mailDataReply = {
          from: 'winchbot.do.not.reply@gmail.com',
          to: req.body.email,
          subject: `Thanks for the message, ${req.body.name}!`,
          text: 'Hello, I am Yasaman! You sent a message through the Contact form on Yasaman Forouzesh\'s portfolio, and she instructed me to say thanks! Your message has been received, and you should get a reply soon from yasamanforouzesh93@gmail.com',
          html: 
          '<div><h3>Hello, I am Yasaman!</h3><p>You sent a message through the Contact form on <a href="https://yasaman-forouzesh.herokuapp.com/">Yasaman Forouzesh\'s portfolio,</a> and she instructed me to say thanks! Your message has been received, and you should get a reply soon from yasamanforouzesh93@gmail.com. Meanwhile, check out Yasaman\'s <a href="https://www.linkedin.com/in/yasaman-forouzesh/">Linkedin</a> and <a href="https://github.com/YasamanForouzesh">Github!</a></p><p><h3>.</p></h3></div>'
      }
  
      transporter.sendMail(mailDataReply, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info);
      })
  
      console.log(req.body)
      res.send('success')
    }
  }