const mongoose = require('mongoose')
const mongoURL ="mongodb+srv://sravlog2021:sravlog2021@cluster0.hy1wv9j.mongodb.net/book ";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
