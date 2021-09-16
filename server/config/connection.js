const mongoose = require("mongoose");

//CHANGE THE LINK ONCE WE DECIDE ON A NAME!!!!
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/hotsauceboss",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hotsauceboss',
  err => {
    if (err) throw err;
    console.log('connected to MongoDB')
  });

module.exports = mongoose.connection;
