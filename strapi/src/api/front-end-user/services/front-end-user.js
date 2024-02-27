'use strict';

/**
 * front-end-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front-end-user.front-end-user');
