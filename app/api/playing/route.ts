import querystring from "querystring";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTTLY_PLAYED_ENDPOINT='https://api.spotify.com/v1/me/player/recently-played'
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const CLIENT_ID = process.env.WSPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.WSPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.WSPOTIFY_REFRESH_TOKEN;


const getAccessToken = async () => {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return await response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET() {
  try {
    const response = await getNowPlaying();
    const lastPlayed = await getRecentlyPlayed()
  
    // return last played if user is not currently playing any song
    if (response.status === 204 || response.status > 400) {
      const lastPlayedData = await lastPlayed.json();
      const lastPlayedSong = lastPlayedData.items[0]

      const title = lastPlayedSong.track.name;
      const artiste = (lastPlayedSong.track.artists as { name: string }[])
        .map((_artist) => _artist.name)
        .join(", ");
      const album = lastPlayedSong.track.album.name;
      const image_url = lastPlayedSong.track.album.images[0]?.url;
      const url = lastPlayedSong.track.context?.external_urls?.spotify;
      const playedAt = lastPlayedSong.played_at;

      return new Response(
        JSON.stringify({title, artiste, album,  image_url, url, playedAt })
      );
    }

    const song = await response.json();
    if (!song.item) {
        const lastPlayedData = await lastPlayed.json();
        const lastPlayedSong = lastPlayedData.items[0]
  
        const title = lastPlayedSong.track.name;
        const artiste = (lastPlayedSong.track.artists as { name: string }[])
          .map((_artist) => _artist.name)
          .join(", ");
        const album = lastPlayedSong.track.album.name;
        const image_url = lastPlayedSong.track.album.images[0]?.url;
        const url = lastPlayedSong.track.context?.external_urls?.spotify;
        const playedAt = lastPlayedSong.played_at;
        return new Response(
          JSON.stringify({title, artiste, album,  image_url, url, playedAt })
        );
  
    }

    const is_playing = song.is_playing;
    const title = song.item.name;
    const artiste = (song.item.artists as { name: string }[])
      .map((_artist) => _artist.name)
      .join(", ");
    const album = song.item.album.name;
    const image_url = song.item.album.images[0]?.url;
    const url = song.item.album.images[0]?.url;

    return new Response(
      JSON.stringify({ is_playing, title, artiste, album, image_url, url })
    );
  } catch (error) {
    console.error({error})
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: "Error fetching currently playing",
    });
  }
}
