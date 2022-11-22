'use strict';

/**
 * create-poll controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::create-poll.create-poll');
