'use strict';

/**
 * favorite-tool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-tool.favorite-tool');
