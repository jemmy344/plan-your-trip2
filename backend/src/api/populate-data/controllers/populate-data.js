'use strict';

/**
 * A set of functions called "actions" for `populate-data`
 */

module.exports = {
  initPopulateLocation: async (ctx, next) => {
    try {
      const { count, place } = ctx.request.query;
      const data = await strapi
          .service("api::populate-data.populate-data")
          .initPopulateLocation(count,place);
      ctx.body = data;
  } catch (error) {
      ctx.throw(400, error);
      ctx.badRequest("Populate Service controller error", {
          moreDetails: error,
      });
  }
  }
};
