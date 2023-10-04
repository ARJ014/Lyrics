/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data1 } = useGetTopChartsQuery();

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  const data = {
    tracks: [
      {
        layout: "5",
        type: "MUSIC",
        key: "673557639",
        title: "Paint The Town Red",
        subtitle: "Doja Cat",
        share: {
          subject: "Paint The Town Red - Doja Cat",
          text: "Paint The Town Red by Doja Cat",
          href: "https://www.shazam.com/track/673557639/paint-the-town-red",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Paint The Town Red by Doja Cat.",
          html: "https://www.shazam.com/snippets/email-share/673557639?lang=en-US&country=US",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/54/ba/99/54ba9945-5aae-bec7-a80c-188de630b37b/d62857dc-e8bd-41f6-b4d5-e368875c6044_ami-identity-7d4c30a95a90f129a834aecd444aa07a-2023-06-16T14-02-41.627Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/673557639",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/54/ba/99/54ba9945-5aae-bec7-a80c-188de630b37b/d62857dc-e8bd-41f6-b4d5-e368875c6044_ami-identity-7d4c30a95a90f129a834aecd444aa07a-2023-06-16T14-02-41.627Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg",
          joecolor: "b:ffffffp:050607s:1b1515t:373838q:494443",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1704921697",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cd/87/0b/cd870b5f-c356-f761-e176-c45aba37eab1/mzaf_17565732451070337798.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/paint-the-town-red/1704921687?i=1704921697&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/paint-the-town-red/1704921687?i=1704921697&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "doja-cat",
            id: "42",
            adamid: "830588310",
          },
        ],
        url: "https://www.shazam.com/track/673557639/paint-the-town-red",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/830588310/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1701008023",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1701008023?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "675031499",
        title: "greedy",
        subtitle: "Tate McRae",
        share: {
          subject: "greedy - Tate McRae",
          text: "greedy by Tate McRae",
          href: "https://www.shazam.com/track/675031499/greedy",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/23/07/92/23079247-25be-3098-ef53-78e7d0fe7406/196871341653.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover greedy by Tate McRae.",
          html: "https://www.shazam.com/snippets/email-share/675031499?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/29/18/b6/2918b602-4505-0632-73cf-5226f9581a87/fda79ffd-5fd1-40b3-8bd7-e8ea5531dff7_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-09-15T05-27-44.467Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/675031499",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/29/18/b6/2918b602-4505-0632-73cf-5226f9581a87/fda79ffd-5fd1-40b3-8bd7-e8ea5531dff7_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-09-15T05-27-44.467Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/23/07/92/23079247-25be-3098-ef53-78e7d0fe7406/196871341653.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/23/07/92/23079247-25be-3098-ef53-78e7d0fe7406/196871341653.jpg/400x400cc.jpg",
          joecolor: "b:fefefep:090509s:242423t:3a373aq:4f504f",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1706381103",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/1a/92/61/1a92611d-d5df-c0e1-59f6-63a89297244f/mzaf_10360959294085002392.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/greedy/1706381100?i=1706381103&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/greedy/1706381100?i=1706381103&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "tate-mcrae",
            id: "42",
            adamid: "1446365464",
          },
        ],
        url: "https://www.shazam.com/track/675031499/greedy",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1446365464/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1707092755",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1707092755?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "675132421",
        title: "Strangers",
        subtitle: "Kenya Grace",
        share: {
          subject: "Strangers - Kenya Grace",
          text: "Strangers by Kenya Grace",
          href: "https://www.shazam.com/track/675132421/strangers",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/82/da/f7/82daf7a1-4d0e-9a94-9314-0916e4ab5635/054391385239.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Strangers by Kenya Grace.",
          html: "https://www.shazam.com/snippets/email-share/675132421?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/12/88/5a/12885a75-f1bc-e71d-bbd6-b357d5f2e6b4/31f61f5b-94ac-48ab-8ea9-4c2c7fc75369_ami-identity-9071226a01f789ae6bfa56e1c87e1a22-2023-04-26T13-25-58.614Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/675132421",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/12/88/5a/12885a75-f1bc-e71d-bbd6-b357d5f2e6b4/31f61f5b-94ac-48ab-8ea9-4c2c7fc75369_ami-identity-9071226a01f789ae6bfa56e1c87e1a22-2023-04-26T13-25-58.614Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/82/da/f7/82daf7a1-4d0e-9a94-9314-0916e4ab5635/054391385239.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/82/da/f7/82daf7a1-4d0e-9a94-9314-0916e4ab5635/054391385239.jpg/400x400cc.jpg",
          joecolor: "b:000a19p:aacf3bs:d1a9b0t:88a834q:a78992",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1704393613",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/85/5b/b5/855bb54a-f6ca-2b11-22ad-3c9ac15bd019/mzaf_5684878710251751871.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/strangers/1704393598?i=1704393613&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/strangers/1704393598?i=1704393613&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "kenya-grace",
            id: "42",
            adamid: "1476584041",
          },
        ],
        url: "https://www.shazam.com/track/675132421/strangers",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1476584041/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "633367735",
        title: "Si No Estás",
        subtitle: "Iñigo Quintero",
        share: {
          subject: "Si No Estás - Iñigo Quintero",
          text: "Si No Estás by Iñigo Quintero",
          href: "https://www.shazam.com/track/633367735/si-no-est%C3%A1s",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/c4/b2/f2/c4b2f2ae-5122-d699-2191-d6b438ed199f/cover.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Si No Estás by Iñigo Quintero.",
          html: "https://www.shazam.com/snippets/email-share/633367735?lang=en-US&country=US",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/c7/6e/49/c76e49ea-cafd-13e5-7fbd-1ee2e9fe8a63/48a115d8-5378-4dc9-b5a3-7e4eb08169cc_file_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/633367735",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/c7/6e/49/c76e49ea-cafd-13e5-7fbd-1ee2e9fe8a63/48a115d8-5378-4dc9-b5a3-7e4eb08169cc_file_cropped.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/c4/b2/f2/c4b2f2ae-5122-d699-2191-d6b438ed199f/cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/c4/b2/f2/c4b2f2ae-5122-d699-2191-d6b438ed199f/cover.jpg/400x400cc.jpg",
          joecolor: "b:e7e7e7p:000000s:1b1b1bt:2e2e2eq:434343",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1678217896",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/58/31/ed/5831ede0-611c-479c-ea3b-4e646066e4b8/mzaf_7161969819350161171.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/si-no-est%C3%A1s/1678217704?i=1678217896&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/si-no-est%C3%A1s/1678217704?i=1678217896&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "i%C3%B1igo-quintero",
            id: "42",
            adamid: "1498499723",
          },
        ],
        url: "https://www.shazam.com/track/633367735/si-no-est%C3%A1s",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1498499723/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "672591037",
        title: "Le Monde (From Talk to Me)",
        subtitle: "Richard Carter",
        share: {
          subject: "Le Monde (From Talk to Me) - Richard Carter",
          text: "Le Monde (From Talk to Me) by Richard Carter",
          href: "https://www.shazam.com/track/672591037/le-monde-from-talk-to-me",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c0/52/16/c05216ac-98f2-4b83-8bf8-cdf50e8ce6ee/41711.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Le Monde (From Talk to Me) by Richard Carter.",
          html: "https://www.shazam.com/snippets/email-share/672591037?lang=en-US&country=US",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/bd/8a/47/bd8a47a8-bdb5-46b3-9fae-22a92dfaa7d2/5c98b77d-050f-45c1-96db-5f26fa426f5c_file_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/672591037",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/bd/8a/47/bd8a47a8-bdb5-46b3-9fae-22a92dfaa7d2/5c98b77d-050f-45c1-96db-5f26fa426f5c_file_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c0/52/16/c05216ac-98f2-4b83-8bf8-cdf50e8ce6ee/41711.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c0/52/16/c05216ac-98f2-4b83-8bf8-cdf50e8ce6ee/41711.jpg/400x400cc.jpg",
          joecolor: "b:5b5b5bp:fefefes:f5f5f5t:ddddddq:d6d6d6",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1707436042",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b3/9d/be/b39dbeb5-8a99-3f2a-ef6b-c011f7e1f825/mzaf_3302117330170446581.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/le-monde-from-talk-to-me/1707436041?i=1707436042&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/le-monde-from-talk-to-me/1707436041?i=1707436042&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "richard-carter",
            id: "42",
            adamid: "1449275169",
          },
        ],
        url: "https://www.shazam.com/track/672591037/le-monde-from-talk-to-me",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1449275169/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "439232891",
        title: "Amour plastique",
        subtitle: "Videoclub",
        share: {
          subject: "Amour plastique - Videoclub",
          text: "Amour plastique by Videoclub",
          href: "https://www.shazam.com/track/439232891/amour-plastique",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/65/f3/37/65f337c2-d904-3d6a-c6b2-e327dee231e9/886448932147.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Amour plastique by Videoclub.",
          html: "https://www.shazam.com/snippets/email-share/439232891?lang=en-US&country=US",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/14/bf/29/14bf2955-71fe-ce41-40ca-ba783416de72/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/439232891",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/14/bf/29/14bf2955-71fe-ce41-40ca-ba783416de72/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/65/f3/37/65f337c2-d904-3d6a-c6b2-e327dee231e9/886448932147.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/65/f3/37/65f337c2-d904-3d6a-c6b2-e327dee231e9/886448932147.jpg/400x400cc.jpg",
          joecolor: "b:ac3c78p:ffffffs:aee3f8t:eed8e4q:adc1df",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1544147203",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/02/f6/7f/02f67fd0-af89-ae18-1b5b-6867853487c4/mzaf_5372112259146750944.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/amour-plastique/1544147199?i=1544147203&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/amour-plastique/1544147199?i=1544147203&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "videoclub",
            id: "42",
            adamid: "1435695527",
          },
        ],
        url: "https://www.shazam.com/track/439232891/amour-plastique",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1435695527/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1474263233",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1474263233?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "667312288",
        title: "(It Goes Like) Nanana (Edit)",
        subtitle: "Peggy Gou",
        share: {
          subject: "(It Goes Like) Nanana (Edit) - Peggy Gou",
          text: "(It Goes Like) Nanana (Edit) by Peggy Gou",
          href: "https://www.shazam.com/track/667312288/it-goes-like-nanana-edit",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/a7/a7/96/a7a79669-7b20-9026-cb8e-773b1a9d31e3/191404137420.png/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover (It Goes Like) Nanana (Edit) by Peggy Gou.",
          html: "https://www.shazam.com/snippets/email-share/667312288?lang=en-US&country=US",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/3a/de/39/3ade39e8-6de7-ee82-9c02-b9da415205b5/70ea60b1-f26f-4c7d-baa1-c7f969418a03_ami-identity-31a954c200a5c5c449bf5faedb6bd2b7-2023-06-16T08-51-47.675Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/667312288",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/3a/de/39/3ade39e8-6de7-ee82-9c02-b9da415205b5/70ea60b1-f26f-4c7d-baa1-c7f969418a03_ami-identity-31a954c200a5c5c449bf5faedb6bd2b7-2023-06-16T08-51-47.675Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/a7/a7/96/a7a79669-7b20-9026-cb8e-773b1a9d31e3/191404137420.png/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/a7/a7/96/a7a79669-7b20-9026-cb8e-773b1a9d31e3/191404137420.png/400x400cc.jpg",
          joecolor: "b:c8c17bp:12151bs:281f21t:37372eq:483f33",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1689088958",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6a/a1/29/6aa129cb-d7d9-3f66-d2c3-b9aff26705a3/mzaf_4261627486215746711.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/it-goes-like-nanana-edit/1689088940?i=1689088958&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/it-goes-like-nanana-edit/1689088940?i=1689088958&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "peggy-gou",
            id: "42",
            adamid: "1068912248",
          },
        ],
        url: "https://www.shazam.com/track/667312288/it-goes-like-nanana-edit",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1068912248/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1709503187",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1709503187?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "673104339",
        title: "Water",
        subtitle: "Tyla",
        share: {
          subject: "Water - Tyla",
          text: "Water by Tyla",
          href: "https://www.shazam.com/track/673104339/water",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/1e/c9/5b/1ec95bbc-a56f-cbef-070c-ddec9f4fdd3c/196871296205.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Water by Tyla.",
          html: "https://www.shazam.com/snippets/email-share/673104339?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/29/46/66/294666e7-cce0-ede3-fb48-cdf2999c96da/0e948386-5d27-46db-ab40-8b545db0ed38_ami-identity-a66d9229f871152b4ff92342246646ef-2023-07-27T20-30-43.526Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/673104339",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/29/46/66/294666e7-cce0-ede3-fb48-cdf2999c96da/0e948386-5d27-46db-ab40-8b545db0ed38_ami-identity-a66d9229f871152b4ff92342246646ef-2023-07-27T20-30-43.526Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/1e/c9/5b/1ec95bbc-a56f-cbef-070c-ddec9f4fdd3c/196871296205.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/1e/c9/5b/1ec95bbc-a56f-cbef-070c-ddec9f4fdd3c/196871296205.jpg/400x400cc.jpg",
          joecolor: "b:fcf4f1p:090809s:4a2c1bt:393737q:6e5446",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1699082734",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/c5/f6/29/c5f62923-5047-9289-bbfe-bf5427fd60b4/mzaf_10567595967394437858.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/water/1699082722?i=1699082734&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/water/1699082722?i=1699082734&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "tyla",
            id: "42",
            adamid: "1552925732",
          },
        ],
        url: "https://www.shazam.com/track/673104339/water",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1552925732/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1700993339",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1700993339?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "668616600",
        title: "Prada",
        subtitle: "cassö, RAYE & D-Block Europe",
        share: {
          subject: "Prada - cassö, RAYE & D-Block Europe",
          text: "Prada by cassö, RAYE & D-Block Europe",
          href: "https://www.shazam.com/track/668616600/prada",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/59/f7/8159f7b5-52c0-003b-92c2-04c98a6147a1/196871373258.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Prada by cassö, RAYE & D-Block Europe.",
          html: "https://www.shazam.com/snippets/email-share/668616600?lang=en-US&country=US",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/94/5f/7c/945f7c49-26ce-c2f8-2932-f79ce67acdfa/f0600603-d695-44c7-87b6-3a53c67dc774_ami-identity-898521b78a523adefa794ae2ef9f186c-2023-08-17T20-24-04.528Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/668616600",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/94/5f/7c/945f7c49-26ce-c2f8-2932-f79ce67acdfa/f0600603-d695-44c7-87b6-3a53c67dc774_ami-identity-898521b78a523adefa794ae2ef9f186c-2023-08-17T20-24-04.528Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/59/f7/8159f7b5-52c0-003b-92c2-04c98a6147a1/196871373258.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/59/f7/8159f7b5-52c0-003b-92c2-04c98a6147a1/196871373258.jpg/400x400cc.jpg",
          joecolor: "b:c8ccbep:050604s:11110dt:2c2d29q:353630",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1701829495",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/86/a5/e4/86a5e4f4-d577-0776-32c7-934df4d927fd/mzaf_14051414921641954149.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/prada/1701829489?i=1701829495&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/prada/1701829489?i=1701829495&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "cass%C3%B6",
            id: "42",
            adamid: "1701835612",
          },
          {
            alias: "raye",
            id: "42",
            adamid: "261686",
          },
          {
            alias: "d-block-europe",
            id: "42",
            adamid: "1240341559",
          },
        ],
        url: "https://www.shazam.com/track/668616600/prada",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1701835612/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1703033093",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1703033093?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "670453090",
        title: "vampire",
        subtitle: "Olivia Rodrigo",
        share: {
          subject: "vampire - Olivia Rodrigo",
          text: "vampire by Olivia Rodrigo",
          href: "https://www.shazam.com/track/670453090/vampire",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover vampire by Olivia Rodrigo.",
          html: "https://www.shazam.com/snippets/email-share/670453090?lang=en-US&country=US",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/34/dd/36/34dd3678-40c6-9d8b-fa0f-cb6d82d3103b/6c46071d-e4d2-4671-a110-6ad83a63b89b_ami-identity-5b05d351a6e3c7256ef7680c8aef2894-2023-06-30T03-58-10.754Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/670453090",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/34/dd/36/34dd3678-40c6-9d8b-fa0f-cb6d82d3103b/6c46071d-e4d2-4671-a110-6ad83a63b89b_ami-identity-5b05d351a6e3c7256ef7680c8aef2894-2023-06-30T03-58-10.754Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/400x400cc.jpg",
          joecolor: "b:14143bp:e39893s:d0948ct:ba7d81q:aa7b7c",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1694386830",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/44/b1/89/44b18994-0f58-5007-cb38-92e866303b60/mzaf_10223256425894007794.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/vampire/1694386825?i=1694386830&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/vampire/1694386825?i=1694386830&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "olivia-rodrigo",
            id: "42",
            adamid: "979458609",
          },
        ],
        url: "https://www.shazam.com/track/670453090/vampire",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/979458609/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1694610583",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1694610583?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "659236090",
        title: "Daylight",
        subtitle: "David Kushner",
        share: {
          subject: "Daylight - David Kushner",
          text: "Daylight by David Kushner",
          href: "https://www.shazam.com/track/659236090/daylight",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/29/b8/41/29b84156-2edb-692d-329b-8faf1d076054/23SYMIM06332.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Daylight by David Kushner.",
          html: "https://www.shazam.com/snippets/email-share/659236090?lang=en-US&country=US",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/b7/eb/71b7ebc4-537e-4122-5d91-13d0f77dc2b6/d423d5cb-b6e0-4462-9edb-dac6ee2a63c6_file_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/659236090",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/b7/eb/71b7ebc4-537e-4122-5d91-13d0f77dc2b6/d423d5cb-b6e0-4462-9edb-dac6ee2a63c6_file_cropped.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/29/b8/41/29b84156-2edb-692d-329b-8faf1d076054/23SYMIM06332.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/29/b8/41/29b84156-2edb-692d-329b-8faf1d076054/23SYMIM06332.rgb.jpg/400x400cc.jpg",
          joecolor: "b:1b2500p:e7ecf5s:d1d3d8t:bec4c4q:adb0ad",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1702038908",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d9/3e/15/d93e150d-5c9f-b9a8-5dd1-4dc588cd691e/mzaf_16846279904485101440.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/daylight/1702038892?i=1702038908&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/daylight/1702038892?i=1702038908&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "david-kushner",
            id: "42",
            adamid: "1529375597",
          },
        ],
        url: "https://www.shazam.com/track/659236090/daylight",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1529375597/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1681943558",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1681943558?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "673554337",
        title: "Vois sur ton chemin (Techno Mix)",
        subtitle: "BENNETT",
        share: {
          subject: "Vois sur ton chemin (Techno Mix) - BENNETT",
          text: "Vois sur ton chemin (Techno Mix) by BENNETT",
          href: "https://www.shazam.com/track/673554337/vois-sur-ton-chemin-techno-mix",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/68/cc/9268cc08-e44e-16f5-5682-e769e3d97f9f/5054197770722.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Vois sur ton chemin (Techno Mix) by BENNETT.",
          html: "https://www.shazam.com/snippets/email-share/673554337?lang=en-US&country=US",
          snapchat: "https://www.shazam.com/partner/sc/track/673554337",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/68/cc/9268cc08-e44e-16f5-5682-e769e3d97f9f/5054197770722.jpg/400x400cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/68/cc/9268cc08-e44e-16f5-5682-e769e3d97f9f/5054197770722.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/68/cc/9268cc08-e44e-16f5-5682-e769e3d97f9f/5054197770722.jpg/400x400cc.jpg",
          joecolor: "b:1e1e1ep:ffe401s:d2ba79t:d1bc07q:ae9a67",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1699825323",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/69/0b/b3/690bb3ec-cda5-cf2f-c86d-03c98c48db9a/mzaf_16116283004972729891.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/vois-sur-ton-chemin-techno-mix/1699825309?i=1699825323&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/vois-sur-ton-chemin-techno-mix/1699825309?i=1699825323&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "bennett",
            id: "42",
            adamid: "1445044753",
          },
        ],
        url: "https://www.shazam.com/track/673554337/vois-sur-ton-chemin-techno-mix",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1445044753/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "668652025",
        title: "ecstacy (slowed)",
        subtitle: "SUICIDAL-IDOL",
        share: {
          subject: "ecstacy (slowed) - SUICIDAL-IDOL",
          text: "ecstacy (slowed) by SUICIDAL-IDOL",
          href: "https://www.shazam.com/track/668652025/ecstacy-slowed",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover ecstacy (slowed) by SUICIDAL-IDOL.",
          html: "https://www.shazam.com/snippets/email-share/668652025?lang=en-US&country=US",
          snapchat: "https://www.shazam.com/partner/sc/track/668652025",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/400x400cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/400x400cc.jpg",
          joecolor: "b:94a1b2p:120a09s:282020t:2c282bq:3e3a3d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1696956489",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/46/d9/fd46d9b2-259a-b737-8f1e-3a9b036d0e32/mzaf_3349155574772793772.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/ecstacy-slowed/1696956481?i=1696956489&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/ecstacy-slowed/1696956481?i=1696956489&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "suicidal-idol",
            id: "42",
            adamid: "1610818819",
          },
        ],
        url: "https://www.shazam.com/track/668652025/ecstacy-slowed",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1610818819/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "653369691",
        title: "Tattoo",
        subtitle: "Loreen",
        share: {
          subject: "Tattoo - Loreen",
          text: "Tattoo by Loreen",
          href: "https://www.shazam.com/track/653369691/tattoo",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/50/32/fd/5032fddc-e486-956d-a503-7ec6d17af848/22UM1IM46463.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Tattoo by Loreen.",
          html: "https://www.shazam.com/snippets/email-share/653369691?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/9d/11/2e/9d112e73-3003-1289-9888-f6b72ec76ae9/44644485-08d0-4da5-9471-4185ed3089d6_ami-identity-ebd31eb1e543e630fcd5a70d51ee8e60-2023-02-27T10-45-58.766Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/653369691",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/9d/11/2e/9d112e73-3003-1289-9888-f6b72ec76ae9/44644485-08d0-4da5-9471-4185ed3089d6_ami-identity-ebd31eb1e543e630fcd5a70d51ee8e60-2023-02-27T10-45-58.766Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/50/32/fd/5032fddc-e486-956d-a503-7ec6d17af848/22UM1IM46463.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/50/32/fd/5032fddc-e486-956d-a503-7ec6d17af848/22UM1IM46463.rgb.jpg/400x400cc.jpg",
          joecolor: "b:3c3c3cp:f6f6f6s:e2e9f0t:d0d0d0q:c0c6cc",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1672056675",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/28/a3/3e/28a33e92-39f5-ba72-9b18-bba16f9b36de/mzaf_9634311354149611886.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/tattoo/1672056674?i=1672056675&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/tattoo/1672056674?i=1672056675&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "loreen",
            id: "42",
            adamid: "417755574",
          },
        ],
        url: "https://www.shazam.com/track/653369691/tattoo",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/417755574/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "679088742",
        title: "Dalie",
        subtitle: "Kamo Mphela",
        share: {
          subject: "Dalie - Kamo Mphela",
          text: "Dalie by Kamo Mphela",
          href: "https://www.shazam.com/track/679088742/dalie",
          twitter: "I used @Shazam to discover Dalie by Kamo Mphela.",
          html: "https://www.shazam.com/snippets/email-share/679088742?lang=en-US&country=US",
          snapchat: "https://www.shazam.com/partner/sc/track/679088742",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:subscribe",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:subscribe",
                  type: "uri",
                  uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        url: "https://www.shazam.com/track/679088742/dalie",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "41337844",
        title: "If It's Lovin' That You Want",
        subtitle: "Rihanna",
        share: {
          subject: "If It's Lovin' That You Want - Rihanna",
          text: "If It's Lovin' That You Want by Rihanna",
          href: "https://www.shazam.com/track/41337844/if-its-lovin-that-you-want",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/2f/89/a4/2f89a4e5-83c4-7cc8-93d6-99b0d8283a1f/16UMGIM58839.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover If It's Lovin' That You Want by Rihanna.",
          html: "https://www.shazam.com/snippets/email-share/41337844?lang=en-US&country=US",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/41337844",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/2f/89/a4/2f89a4e5-83c4-7cc8-93d6-99b0d8283a1f/16UMGIM58839.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/2f/89/a4/2f89a4e5-83c4-7cc8-93d6-99b0d8283a1f/16UMGIM58839.rgb.jpg/400x400cc.jpg",
          joecolor: "b:211d2ep:ffffffs:f4c779t:d2d1d5q:c9a56a",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1440867615",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8d/1a/99/8d1a99da-9327-136a-1605-8c06040caa94/mzaf_17123862389284810393.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/if-its-lovin-that-you-want/1440867092?i=1440867615&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/if-its-lovin-that-you-want/1440867092?i=1440867615&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rihanna",
            id: "42",
            adamid: "63346553",
          },
        ],
        url: "https://www.shazam.com/track/41337844/if-its-lovin-that-you-want",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/63346553/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445834991",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1445834991?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "668023156",
        title:
          "Popular (feat. Playboi Carti) [Music from the HBO Original Series The Idol]",
        subtitle: "The Weeknd & Madonna",
        share: {
          subject:
            "Popular (feat. Playboi Carti) [Music from the HBO Original Series The Idol] - The Weeknd & Madonna",
          text: "Popular (feat. Playboi Carti) [Music from the HBO Original Series The Idol] by The Weeknd & Madonna",
          href: "https://www.shazam.com/track/668023156/popular-feat-playboi-carti-music-from-the-hbo-original",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/f9/40/ce/f940ce64-ef5e-9ed0-5171-45d790b8b999/23UMGIM66787.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Popular (feat. Playboi Carti) [Music from the HBO Original Series The Idol] by The Weeknd & Madonna.",
          html: "https://www.shazam.com/snippets/email-share/668023156?lang=en-US&country=US",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/2d/85/9c/2d859cc8-7230-8ba7-b741-a7c7c029bed6/8be5558a-5c13-48da-a649-a873856f3fb0_ami-identity-777ad796f94973f081f3e54e4b81fcb1-2023-07-22T13-59-27.161Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/668023156",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/2d/85/9c/2d859cc8-7230-8ba7-b741-a7c7c029bed6/8be5558a-5c13-48da-a649-a873856f3fb0_ami-identity-777ad796f94973f081f3e54e4b81fcb1-2023-07-22T13-59-27.161Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/f9/40/ce/f940ce64-ef5e-9ed0-5171-45d790b8b999/23UMGIM66787.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/f9/40/ce/f940ce64-ef5e-9ed0-5171-45d790b8b999/23UMGIM66787.rgb.jpg/400x400cc.jpg",
          joecolor: "b:141213p:ffffffs:fe1600t:cfcfcfq:cf1503",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1691920672",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/f5/6f/a2f56fe9-59af-3adc-2d0f-4a7ab5df64f3/mzaf_5953370175813994243.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/popular-feat-playboi-carti-music-from-the-hbo-original/1691920669?i=1691920672&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/popular-feat-playboi-carti-music-from-the-hbo-original/1691920669?i=1691920672&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "the-weeknd",
            id: "42",
            adamid: "479756766",
          },
          {
            alias: "madonna",
            id: "42",
            adamid: "20044",
          },
        ],
        url: "https://www.shazam.com/track/668023156/popular-feat-playboi-carti-music-from-the-hbo-original",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/479756766/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "667426645",
        title: 'What Was I Made For? [From The Motion Picture "Barbie"]',
        subtitle: "Billie Eilish",
        share: {
          subject:
            'What Was I Made For? [From The Motion Picture "Barbie"] - Billie Eilish',
          text: 'What Was I Made For? [From The Motion Picture "Barbie"] by Billie Eilish',
          href: "https://www.shazam.com/track/667426645/what-was-i-made-for-from-the-motion-picture-barbie",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/400x400cc.jpg",
          twitter:
            'I used @Shazam to discover What Was I Made For? [From The Motion Picture "Barbie"] by Billie Eilish.',
          html: "https://www.shazam.com/snippets/email-share/667426645?lang=en-US&country=US",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/aa/64/c1/aa64c19b-b273-76ee-f785-05ee22555de4/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/667426645",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/aa/64/c1/aa64c19b-b273-76ee-f785-05ee22555de4/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/400x400cc.jpg",
          joecolor: "b:86905bp:090500s:12140bt:222112q:292c1b",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1696819855",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f9/6d/3d/f96d3d31-01e5-9432-98eb-1e7543f95df2/mzaf_4902063008893623849.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/what-was-i-made-for-from-the-motion-picture-barbie/1696819852?i=1696819855&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/what-was-i-made-for-from-the-motion-picture-barbie/1696819852?i=1696819855&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "billie-eilish",
            id: "42",
            adamid: "1065981054",
          },
        ],
        url: "https://www.shazam.com/track/667426645/what-was-i-made-for-from-the-motion-picture-barbie",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1065981054/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1697025624",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1697025624?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "70679146",
        title: "Another Love",
        subtitle: "Tom Odell",
        share: {
          subject: "Another Love - Tom Odell",
          text: "Another Love by Tom Odell",
          href: "https://www.shazam.com/track/70679146/another-love",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Another Love by Tom Odell.",
          html: "https://www.shazam.com/snippets/email-share/70679146?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/8c/2b/b1/8c2bb147-2be8-31b8-1f11-de8085fe046e/269bf626-aa88-45e6-8b4a-ae1d579b7666_ami-identity-f08038d0c69168c8e146047387aff4ae-2023-09-21T17-28-38.767Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/70679146",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/8c/2b/b1/8c2bb147-2be8-31b8-1f11-de8085fe046e/269bf626-aa88-45e6-8b4a-ae1d579b7666_ami-identity-f08038d0c69168c8e146047387aff4ae-2023-09-21T17-28-38.767Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/dd/1f/7a/dd1f7a8d-eb5d-2508-3ba5-2de3739a1437/886444186797.jpg/400x400cc.jpg",
          joecolor: "b:aba7a4p:080a0ds:06171et:292a2bq:273439",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "687868140",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e2/18/b7/e218b7c2-5650-2e40-7a63-5c4ca08018fe/mzaf_3776950118914761382.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/another-love/687867700?i=687868140&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/another-love/687867700?i=687868140&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "tom-odell",
            id: "42",
            adamid: "524929515",
          },
        ],
        url: "https://www.shazam.com/track/70679146/another-love",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/524929515/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1281370544",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1281370544?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "601555046",
        title: "Calm Down",
        subtitle: "Rema",
        share: {
          subject: "Calm Down - Rema",
          text: "Calm Down by Rema",
          href: "https://www.shazam.com/track/601555046/calm-down",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Calm Down by Rema.",
          html: "https://www.shazam.com/snippets/email-share/601555046?lang=en-US&country=US",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/12/01/aa/1201aa32-9c7a-20d2-59da-62d5c52475ea/b189593f-d48b-4626-85f1-413a73bfab58_ami-identity-9e987f39368f9dd37966c136969aac14-2023-06-26T16-11-48.592Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/601555046",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/12/01/aa/1201aa32-9c7a-20d2-59da-62d5c52475ea/b189593f-d48b-4626-85f1-413a73bfab58_ami-identity-9e987f39368f9dd37966c136969aac14-2023-06-26T16-11-48.592Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          joecolor: "b:f7f1d1p:020000s:1f1909t:333029q:4a4431",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1614063459",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/us/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/us/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rema",
            id: "42",
            adamid: "1304716885",
          },
        ],
        url: "https://www.shazam.com/track/601555046/calm-down",
        highlightsurls: {
          artisthighlightsurl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/1304716885/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1650414355",
          trackhighlighturl:
            "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1650414355?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        },
        properties: {},
      },
    ],
  };
  const topPlays = data.tracks?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer mt-2">
              See more
            </p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
