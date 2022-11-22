'use strict';

/**
 * create-poll service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-poll.create-poll');
