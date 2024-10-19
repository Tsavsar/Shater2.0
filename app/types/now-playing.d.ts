// types/now-playing.d.ts

declare module '@BolajiOlajide/now-playing' {
    export interface IStorer {
      get: (key: string) => Promise<T>;
      set: (key: string, value: T) => Promise<void>;
    }
  
    // Spotify credentials interface
    export interface SpotifyStreamerArgs {
      clientId: string;
      clientSecret: string;
      refreshToken: string;
    }
  
    // Configuration options for NowPlaying
    export interface NowPlayingOptions {
      useCache?: boolean;
      cacheDuration?: number; // in milliseconds
      streamerArgs: SpotifyStreamerArgs;
      storer?: IStorer;
    }
  
    // Enum for supported providers
    export enum Providers {
      SPOTIFY = 'spotify',
    }
  
    // NowPlaying class definition
    export class NowPlaying {
      fetchCurrentlyPlayingOrLastPlayed(): T {
          throw new Error('Method not implemented.');
      }
      constructor(provider: Providers, options: NowPlayingOptions);
      getNowPlaying(): Promise<T>; // You'll need to replace "any" with a proper type if you know the structure of the data.
    }
  }
  