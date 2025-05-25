import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseURL = import.meta.env.VITE_API_URL
export const baseApi = baseURL + '/api/';

export const tasksApi = createApi( {
	reducerPath: 'tasksApi',
	baseQuery: fetchBaseQuery( { baseUrl: baseApi } ),
	tagTypes: ['Tasks'],
	endpoints: () => ({})
}) 