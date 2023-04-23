//0UCBBODci7RtqgTc
//puzzle
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const leaderboardRoutes = require('./routes/leaderboardaRoutes');
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/auth' , authRoutes);

app.use('/leaderboard', leaderboardRoutes);

app.listen(PORT, () => {
  console.log('Server listening on port 5000');
});
