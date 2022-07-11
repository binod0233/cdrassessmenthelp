'use strict';

/**
 * cdr-agent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cdr-agent.cdr-agent');
