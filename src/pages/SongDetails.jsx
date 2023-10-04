import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { DetailsHeader, Loader, RelatedSongs, Error } from "../components";
import {
  useGetSongDetailsQuery,
  useGetSongRecomendationQuery,
  useGetTopChartsQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();

  const {
    data: songData,
    isFetching: songDataFetching,
    error: e1,
  } = useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: relatedSongsFetching,
    error: e2,
  } = useGetSongRecomendationQuery(songid);

  if (songDataFetching || relatedSongsFetching)
    return <Loader title="Searching song details" />;

  if (e1 || e2) return <Error />;
  const handlePause = () => {
    dispatch(playPause(false));
  };

  // const data = "d";

  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} artistId="" />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry no Lyrics found...
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data?.tracks}
        // artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePause}
        handlePlayClick={handlePlay}
      />
    </div>
  );
};

export default SongDetails;
