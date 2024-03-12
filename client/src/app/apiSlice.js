import {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"

const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:1110"
    }),
    endpoints:()=>({})
})

export default apiSlice