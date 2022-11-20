module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'fikri-sbd.postgres.database.azure.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'yellowvote'),
      user: env('DATABASE_USERNAME', 'fikri_sbd'),
      password: env('DATABASE_PASSWORD', 'PostgreSQL1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
