import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "083b7ffc10msh7133fe86d97b63ep180e3djsnd23a0c0749ff"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `charts/track`,
    }),
    getSongDetails: builder.query({
      query: (songid) => `songs/get-details?key=${songid}`,
    }),
    getSongRecomendation: builder.query({
      query: (songid) => `songs/list-recommendations?key=${songid}`,
    }),
    GetArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    GetArtistSongs: builder.query({
      query: (artistId) => `/artists/get-top-songs?id=${artistId}`,
    }),
    GetSongsCountry: builder.query({
      query: (countryCode) =>
        `/charts/track?listId=ip-country-chart-${countryCode}`,
    }),
    GetSongsGenre: builder.query({
      query: (genre) => `/charts/track?listId=genre-global-chart-${genre}`,
    }),
    GetSongsGenre: builder.query({
      query: (genre) => `/charts/track?listId=genre-global-chart-${genre}`,
    }),
    GetSongsSearch: builder.query({
      query: (term) => `/search?term=${term}`,
    }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRecomendationQuery,
  useGetSongsCountryQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetSongsGenreQuery,
  useGetSongsSearchQuery,
} = shazamCoreApi;
