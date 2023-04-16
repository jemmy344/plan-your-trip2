import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiConfig } from "../constants/apiConfig";


const { REACT_APP_BACKEND_URL } = process.env;
export const locationService = createApi({
    reducerPath: "locationService",
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_BACKEND_URL
    }),
    endpoints: (builder) => ({
        searchLocation: builder.mutation({
            query: (query) => ({
                url: ApiConfig.searchLocation(query),
                method: "GET",
            }),
        }),
        getLocations: builder.mutation({
            query: () => ({
                url: ApiConfig.getLocations,
                method: "GET",
            }),
        }),
    })
});

export const {
    useGetLocationsMutation,
    useSearchLocationMutation
} = locationService;
