// // server/index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/menu', require('./routes/menuRoutes'));

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//     .catch((err) => console.error(err));





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/menu', require('./routes/menuRoutes'));


//connect your route
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/menu', require('./routes/menuRoutes'));


app.get('/', (req, res) => {
  res.send('API is working');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

 