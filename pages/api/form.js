export default function handler(req, res) {
  res.status(200).json({ name: req.method })

  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}

