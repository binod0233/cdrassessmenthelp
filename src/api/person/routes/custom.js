const config = require("@strapi/strapi/lib/core/registries/config");

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/people/:slug",
      handler: "person.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
