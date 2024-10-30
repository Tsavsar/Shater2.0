import querystring from "querystring";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
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

export async function GET() {
  try {
    const response = await getNowPlaying();
    console.log(response)
    // return an error if the user is currently not playing any song
    const error = { isPlaying: false };
    if (response.status === 204 || response.status > 400) {
      return new Response(JSON.stringify(error), {
        status: 204,
        statusText: "User is offline",
      });
    }

    const song = await response.json();
    // return an error if spotify doesn't return an item
    if (!song.item) {
      return new Response(JSON.stringify(error), {
        status: 404,
        statusText: "Unable to find song",
      });
    }

    // const isPlaying = song.is_playing;
    // const title = song.item.name;
    // const artist = (song.item.artists as { name: string }[])
    //   .map((_artist) => _artist.name)
    //   .join(", ");
    // const album = song.item.album.name;
    // const albumArt = song.item.album.images[0]?.url;

    return new Response(
      JSON.stringify(song)
    );
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: "Error fetching currently playing",
    });
  }
}