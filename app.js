const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

// Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
