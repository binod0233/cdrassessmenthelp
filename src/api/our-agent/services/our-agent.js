'use strict';

/**
 * our-agent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-agent.our-agent');
