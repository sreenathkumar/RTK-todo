import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lws-json-server-todos.herokuapp.com",
  }),
  tagTypes: ["allTodos"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "/todos/?_sort=id&_order=desc",
      providesTags: ["allToDos"],
    }),
    getFilteredToDos: builder.query({
      query: ({ property, value }) => `/todos/?${property}=${value}`,
    }),
    addToDo: builder.mutation({
      query: (data) => ({
        url: `/todos`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => ["allToDos"],
    }),
    updateToDo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: () => ["allToDos"],
    }),

    deleteToDo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["allToDos"],
    }),
  }),
});
export const {
  useGetToDosQuery,
  useGetFilteredToDosQuery,
  useAddToDoMutation,
  useUpdateToDoMutation,
  useDeleteToDoMutation,
} = apiSlice;
