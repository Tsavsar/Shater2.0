import { useEffect, useRef, useState } from "react";
import { ICurrTrack } from "../utils";

export default function useNowPlaying(){
    const [currentTrack, setCurrentTrack] = useState<ICurrTrack>({
        image_url: '/images/shater-2.png',
        title: 'Clueless',
        url: "#",
        artiste: 'Black Bones',
        is_playing: false,
        playedAt: null,
        preview_url: ''
    })
    const [loading, setLoading] = useState<boolean>(true)
    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    const TIME_TO_REFRESH = 10 * 1000;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/playing");
            const data = await response.json();
            if (data) {
                setCurrentTrack(data);
            }
          } catch (err) {
            console.error(err)
          } finally {
            setLoading(false);
          }
        };
    
        interval.current = setInterval(fetchData, TIME_TO_REFRESH)
    
        return () => {
          if (interval.current) clearInterval(interval.current)
        }
        // fetchData();
      }, [TIME_TO_REFRESH]);

      return {loading, currentTrack}
}
