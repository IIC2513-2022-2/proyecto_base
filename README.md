# dccat-API

Código de ejemplo en el contexto de las cápsulas desarrolladas en el curso.

Es importante que al correr `yarn sequelize init`, el archivo `config.js` lo dejen como aparece en las cápsulas :smile: :

```js
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_development`,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_production`,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
```
