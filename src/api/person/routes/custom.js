const config = require("@strapi/strapi/lib/core/registries/config");

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/people/:id",
      handler: "person.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
