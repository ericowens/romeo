export default function handler(req, res) {
  // console.log(req.body)
 

  if (req.method === 'POST') {
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: process.env.EMAIL_TO, // Change to your recipient
      from: 'eric@owens.fyi', // Change to your verified sender
      subject: 'Subscribe',
      // text: `Name:${req.body.fname} ${req.body.lname}`,
      html: `Name:${req.body.fname} ${req.body.lname}
      <br/>Email:${req.body.email}`,
    }
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
    // Handle any other HTTP method
  }
  // res.status(200).json({ msg: 'sent' })
  
}

