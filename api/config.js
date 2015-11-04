module.exports = {
  'development': {
    'dialect': 'sqlite',
    'storage': './db.development.sqlite'
  },
  'test': {
    'username': 'postgres',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'postgres'
  },
  'production': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'postgres'
  }
};
