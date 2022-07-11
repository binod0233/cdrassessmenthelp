'use strict';

/**
 * cdr-agent router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cdr-agent.cdr-agent');
