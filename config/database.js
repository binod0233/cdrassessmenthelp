module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "cdrdb-instance.c6r19h8f82ti.us-east-1.rds.amazonaws.com",
      port: 5432,
      database: "cdrassessement",
      user: "postgres",
      password: "Copenned123",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
