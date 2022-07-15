"use strict";

/**
 *  person controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::person.person", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    console.log("person", slug);

    const entity = await strapi.db
      .query("api::person.person")
      .findOne({ where: { id } });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
