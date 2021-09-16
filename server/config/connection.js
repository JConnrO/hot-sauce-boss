const mongoose = require("mongoose");

//CHANGE THE LINK ONCE WE DECIDE ON A NAME!!!!
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hotsauceboss",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
