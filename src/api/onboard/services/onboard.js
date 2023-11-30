'use strict';

/**
 * onboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::onboard.onboard');
