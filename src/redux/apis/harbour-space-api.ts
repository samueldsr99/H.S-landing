import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { camelizeKeys } from "humps";

import { GetDataScienceApprenticeshipZeptolabResponse } from "@/types";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL });

type RTKBaseQueryFn = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;

/**
 * Performs camelize on backend response keys
 * @param baseQueryFn
 * @returns baseQuery
 */
const withCamelize =
  (baseQueryFn: RTKBaseQueryFn): RTKBaseQueryFn =>
  async (args, api, extraOptions) => {
    const response = await baseQueryFn(args, api, extraOptions);
    if (response.data) {
      response.data = camelizeKeys(response.data);
    }

    return response;
  };

const harbourSpaceApi = createApi({
  baseQuery: withCamelize(baseQuery),
  endpoints: (builder) => ({
    getDataScienceApprenticeshipZeptolab: builder.query<GetDataScienceApprenticeshipZeptolabResponse, void>({
      query: () => `scholarship_pages/data-science-apprenticeship-zeptolab`,
    }),
  }),
});

export default harbourSpaceApi;
