import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  const {
    data: artistSongsData,
    isFetching: isFetchingArtistSongsDetails,
    error: error1,
  } = useGetArtistSongsQuery(artistId);

  if (isFetchingArtistDetails || isFetchingArtistSongsDetails)
    return <Loader title="Loading artist details..." />;

  if (error || error1) return <Error />;
  console.log(artistSongsData?.data);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />

      <RelatedSongs
        data={artistSongsData?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
