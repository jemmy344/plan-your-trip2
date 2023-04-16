module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/populate-data',
     handler: 'populate-data.initPopulateLocation',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
