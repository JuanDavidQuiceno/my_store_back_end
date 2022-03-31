const express = require('express');
const routerApi = require('./routes');
const routerApiv2 = require('./routes/index.v2');
const cors = require('cors');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;
const ip = '192.168.101.5';

app.use(express.json());//aceptar data en el cuenpo

// const whiteList = ['http:localhost:8080', 'http://myapp.co', 'http:localhost:5432', 'http://192.168.101.5:3000'];
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }

// }
app.use(cors());//acepta cualquier origen
// app.use(cors(options));//acepta cualquier origen

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

routerApi(app);
routerApiv2(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://${ip}:${port}`)
});
