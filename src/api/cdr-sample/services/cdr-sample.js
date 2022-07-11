'use strict';

/**
 * cdr-sample service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cdr-sample.cdr-sample');
