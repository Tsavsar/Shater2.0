// pages/api/now-playing.ts (API route)

import { NowPlaying, Providers } from '@bolajiolajide/now-playing';

export async function GET() {
  const np = new NowPlaying(Providers.SPOTIFY, {
    useCache: false,
    cacheDuration: 30000,
    streamerArgs: {
      clientId: process.env.WSPOTIFY_CLIENT_ID || 'FOO',
      clientSecret: process.env.WSPOTIFY_CLIENT_SECRET || 'BAR',
      refreshToken: process.env.WSPOTIFY_REFRESH_TOKEN || 'BAZ',
    },
  });

  try {
    const data = await np.fetchCurrentlyPlayingOrLastPlayed();
    
    console.log(data)
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error});
  }
}
