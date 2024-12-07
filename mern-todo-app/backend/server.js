const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connectDB function
const todoRoutes = require('./routes/todoRoutes');
const mongoose = require('mongoose');

dotenv.config();
connectDB(); // Call the imported connectDB function to connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Built-in JSON parser in Express


// API Routes
app.use('/api/todos', todoRoutes);

//test 
app.get('/test', (req, res) => {
    res.send('Backend is running correctly!');
  });

// Database connection
mongoose.connect('mongodb://localhost:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
