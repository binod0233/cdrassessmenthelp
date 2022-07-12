'use strict';

/**
 * cdr-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cdr-service.cdr-service');
