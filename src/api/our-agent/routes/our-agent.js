'use strict';

/**
 * our-agent router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::our-agent.our-agent');
