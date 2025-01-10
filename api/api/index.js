const app = require('../index.js');
const cors = require('cors');
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options('*', cors());
app.listen(3000);
module.exports = app;
