'use strict';

/**
 * s-cv service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::s-cv.s-cv');
