// api/submitForm.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
      const { name, email, message } = req.body;

      // Validation for the received form data (you can adjust this)
      if (!name || !email || !message) {
          return res.status(400).json({ message: 'All fields are required.' });
      }

      // Here you would typically save the form data to a database or send an email
      // For simplicity, let's just log the data to the console
      console.log('Received form data:', { name, email, message });

      // Return success response
      return res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
      // Return a method not allowed error for non-POST requests
      res.status(405).json({ message: 'Method not allowed' });
  }
}
