const mongoose = require('mongoose');

// Подключение к MongoDB
mongoose.connect(`mongodb+srv://admin:${encodeURIComponent("@qwertY909")}@cluster0.4qyxwgs.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Обработка события подключения к базе данных
db.on('error', console.error.bind(console, 'Ошибка подключения к MongoDB:'));
db.once('open', () => {
  console.log('Успешное подключение к MongoDB');
});

module.exports = db;
