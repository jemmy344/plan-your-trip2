'use strict';

const axios = require('axios');



/**
 * populate-data service
 */

module.exports = {
    initPopulateLocation : async (locationCount, place) => {
        try {
            const pexelsApiKey = 'BzpxIjqHQkr6zJW15wtcXvLmvOp2beiTE9BI3SniLcut2r4n7YfSLUZ0';
            const positionStackApiKey = 'fa22a2cabcc73e08af3bb81dda5bf429';
        
            // PEXELS API endpoint to retrieve random images.
            const pexelsApiEndpoint = `https://api.pexels.com/v1/search?query=houses&per_page=${locationCount}`;
        
            // POSITION STACK API endpoint to retrieve random addresses.
            const positionStackApiEndpoint = `http://api.positionstack.com/v1/forward?access_key=${positionStackApiKey}&limit=${locationCount}&query=${place}&country_module=1`;
        
            // PEXELS API request to fetch random images.
            const pexelsResponse = await axios.get(pexelsApiEndpoint, {
              headers: {
                Authorization: pexelsApiKey,
              },
            });
        
            // POSITION STACK API request to fetch random addresses.
            const positionStackResponse = await axios.get(positionStackApiEndpoint);
        

            // console.log(pexelsResponse.data,"------------------------------\n------------------------", positionStackResponse.data)
            const  pexelsImageData= pexelsResponse?.data || [];
            const {data:positionStackData} = positionStackResponse?.data || [];
        
            // console.log(positionStackData);
            //  console.log(pexelsImageData);
            const locations = [];

            for (let i = 0; i < locationCount; i++) {
              const { code = "", symbol = "" } =
                (positionStackData[i]?.country_module?.currencies[0]) || [];
              // Generate random values for the attributes
              const { large2x } = pexelsImageData?.photos[i]?.src;
              const location = {
                place: positionStackData[i].label.split(",")[0],
                minPricePerDay: Math.round(Math.random() * 300),
                maxPricePerDay: Math.round(Math.random() * 600),
                actualPricePerDay: Math.round(Math.random() * 500),
                bedsCount: Math.round(Math.random() * 5),
                roomCount: Math.round(Math.random() * 5),
                isJacuzziPresent: Boolean(Math.round(Math.random())),
                bathCount: Math.round(Math.random() * 3),
                weather: [
                  "Sunshine",
                  "Cloudy",
                  "Partly Cloudy",
                  "Overcast",
                  "Windy",
                  "Rainy",
                  "Snowy",
                  "Foggy",
                ][Math.floor(Math.random() * 8)],
                temperature: (Math.random() * (120.0 - 10.0) + 10.0).toFixed(1),
                temperatureUnit: ["Fahrenheit", "Celsius"][Math.floor(Math.random() * 2)],
                currency: `${code}(${symbol})`,
                avalabilityPeriod: Math.round(Math.random() * 30),
                imageUrl: large2x,
                publishedAt: new Date().getTime(),
              };
              // Push the new location entry into the array
              locations.push(location);
               await strapi.entityService.create('api::location.location', {data: location});
            }
            
            // Return the array of location objects
           
            
         return {
          locations: locations
         }
            console.log('Added location entries successfully!');
          } catch (error) {
            console.error('Creation failed:', error);
          }
    }
};
