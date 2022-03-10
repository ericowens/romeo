export default function handler(req, res) {
  // console.log(req.body)
 

// Sales@romeopower.com 
//   Public Transit Agency
//   Commercial Transit Operator
//   Government 
//   Vehicle Manufacturer
//   Utility/Energy Company 
//   Other 

// rmo@alpha-ir.com 
//   Media Representative 

// HR@romeopower.com 
//   Colleges/universities
//   Schools 
//   Student

// Accountspayable@romeopower.com 
//   Supplier/Vendor





  if (req.method === 'POST') {
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    let mailto = ''

    switch(req.body.tob) {
        case 'Public Transit Agency':
        case 'Commercial Transit Operator':
        case 'Government Agency':
        case 'Vehicle Manufacturer':
        case 'Utility / Energy Company':
        case 'Other':
          mailto = 'Sales@romeopower.com'
        break;
        case 'Media':
          mailto = 'rmo@alpha-ir.com'
          break;
        case 'College / University':
        case 'School':
        case 'Student':
          mailto = 'Sales@romeopower.com'
        break;
      case 'Supplier / Vendor':
          mailto = 'rmo@alpha-ir.com'
          break;
      default:
        mailto = process.env.EMAIL_TO
    }

    const msg = {
      to: mailto, // Change to your recipient
      from: 'eric@owens.fyi', // Change to your verified sender
      subject: 'Contact',
      // text: `Name:${req.body.fname} ${req.body.lname}`,
      html: `Name:${req.body.fname} ${req.body.lname}
      <br/>Email:${req.body.email}
      <br/>Phone:${req.body.phone}
      <br/>Title:${req.body.title}
      <br/>Company:${req.body.company}
      <br/>Type Of Business:${req.body.tob}
      <br/>Region:${req.body.region}
      <br/>Message:${req.body.message}
      `,
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

