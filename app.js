const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const reservationRoutes = require('./routes/reservation');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);

sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log('Server running on port 3000'));
