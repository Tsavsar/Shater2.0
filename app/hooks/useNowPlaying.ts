import { useEffect, useRef, useState } from "react";

export default function useNowPlaying(){
    const [currentTrack, setCurrentTrack] = useState<any>({
        image_url: '/images/shater-2.png',
        title: 'Clueless',
        url: "#",
        artiste: 'Black Bones',
        is_playing: false
    })
    const [loading, setLoading] = useState<any>(true)
    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    const TIME_TO_REFRESH = 10 * 1000;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/playing");
            const data = await response.json();
            console.log(data)
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
      }, []);

      return {loading, currentTrack}
}
