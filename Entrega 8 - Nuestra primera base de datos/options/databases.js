const mysql_opt = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'ad12345678',
      database: 'ecommerce'
    },
    pool: { min: 0, max: 7 }
  }

const sqlite3_opt = {
    client: "sqlite3",
    connection: {
      filename: "./db/ecommerce.db3",
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 7 }
  }

module.exports = { mysql_opt, sqlite3_opt };