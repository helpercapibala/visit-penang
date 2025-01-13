const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    console.log('Form submission received:', req.body);
    res.status(200).json({ message: 'Form submitted successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
