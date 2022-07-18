'use strict';

/**
 * cdr-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cdr-blog.cdr-blog');
