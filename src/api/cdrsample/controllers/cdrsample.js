"use strict";

/**
 *  cdrsample controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController(
//   "api::cdrsample.cdrsample",
//   ({ strapi }) => ({
//     // Method 3: Replacing a core action
//     async findOne(ctx) {
//       const { slug } = ctx.params;

//       const entity = await strapi.db
//         .query("api::cdrsample.cdrsample")
//         .findOne({ where: { slug } });
//       const sanitizedEntity = await this.sanitizeOutput(entity);

//       return this.transformResponse(sanitizedEntity);
//     },
//   })
// );
module.exports = createCoreController(
  "api::cdrsample.cdrsample",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service("api::cdrsample.cdrsample")
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
