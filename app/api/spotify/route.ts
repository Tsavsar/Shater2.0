// pages/api/now-playing.ts (API route)

import { NowPlaying, Providers } from '@bolajiolajide/now-playing';

export async function GET() {
  const np = new NowPlaying(Providers.SPOTIFY, {
    useCache: true,
    cacheDuration: 30000,
    streamerArgs: {
      clientId: process.env.SPOTIFY_CLIENT_ID || 'FOO',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || 'BAR',
      refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || 'BAZ',
    },
  });

  try {
    const data = await np.fetchCurrentlyPlayingOrLastPlayed();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error});
  }
}
