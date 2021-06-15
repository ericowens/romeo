// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'eric@owens.fyi', // Change to your recipient
    from: 'eric@owens.fyi', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
    
    // res.status(200).json({ name: process.env.SENDGRID_API_KEY })

}
