module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "heroku-help.c6r19h8f82ti.us-east-1.rds.amazonaws.com",
      port: 5432,
      database:"postgres",
      user: "postgres",
      password: "Copenned123",
     ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
