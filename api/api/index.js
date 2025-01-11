const { default: mongoose } = require('mongoose');
const app = require('../index.js');
//const cors = require('cors');
//app.use(
//  cors({
//    credentials: true,
//    origin: true,
//  })
//);
//app.options('*', cors());
//app.listen(3000);
async function start() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
}
start();

module.exports = app;
