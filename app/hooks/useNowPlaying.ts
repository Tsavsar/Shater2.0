import { useEffect, useRef, useState } from "react";

export interface NowPlaying {
  album?: string;
  albumArt?: string;
  artist?: string;
  isPlaying?: boolean;
  title?: string;
}

const TIME_TO_REFRESH = 10 * 1000;

export default function useNowPlaying() {
  const [ncurrentTrack, setCurrentTrack] = useState<NowPlaying>({
    isPlaying: false,
  });
  const [loading, setLoading] = useState(true);

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const getCurrentTrack = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/playing");
        const data = await response.json();
        if (data) setCurrentTrack(data);
      } finally {
        setLoading(false);
      }
    };

    // refetch the currently playing at set intervals
    interval.current = setInterval(getCurrentTrack, TIME_TO_REFRESH);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return {
    loading,
    ncurrentTrack,
  };
}