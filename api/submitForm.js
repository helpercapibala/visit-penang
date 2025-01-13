// api/submitForm.js

module.exports = async (req, res) => {
  if (req.method === 'POST') {
      const { name, email, message } = req.body;

      // Here you would typically handle the form data, e.g., save to a database or send an email
      // For now, just respond with success.
      console.log('Received form data:', { name, email, message });

      // Sending success message back
      res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
      res.status(405).json({ message: 'Method Not Allowed' });
  }
};
