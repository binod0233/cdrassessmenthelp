'use strict';

/**
 * cdr-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cdr-service.cdr-service');
