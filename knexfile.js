const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'nc_news_test',
      user: 'andrew',
      password: 'password'
    }
  },
  test: {
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'nc_news_test',
      user: 'andrew',
      password: 'password'
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
