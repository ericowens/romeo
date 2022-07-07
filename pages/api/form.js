export default function handler(req, res) {
  // console.log(req.body)
 

  if (req.method === 'POST') {
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: process.env.EMAIL_TO, // Change to your recipient
      from: 'eric@owens.fyi', // Change to your verified sender
      subject: 'Please tell us about your system needs below.',
      // text: `Name:${req.body.fname} ${req.body.lname}`,
      html: `Name:${req.body.fname} ${req.body.lname}
      <br/>Email:${req.body.email}
      <br/>Phone:${req.body.phone}
      <br/>Company:${req.body.company}
      <br/>Title:${req.body.title}
      <br/>Comment:${req.body.comment},
      <br/>Markets:${req.body.markets}`,
    }
    // console.log({msg})
    sgMail
    .send(msg)
    .then(() => {
      // console.log('Email sent')
      res.status(200).json({ msg: 'Sent' })
    })
    .catch((error) => {
      res.status(200).json({ error })
      // console.error(error)
    })
      
      
  } else {
    res.status(200).json({ msg: 'sent' })
  }
  // res.status(200).json({ msg: 'sent' })
}

