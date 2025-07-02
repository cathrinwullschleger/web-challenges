import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (url) => fetch(url).then((reset) => reset.json());
export default function ISSTracker() {
  // const [issCords, setIssCords] = useState();
  const {
    data: coordsFromSWR,
    isLoading,
    error,
    mutate,
  } = useSWR("https://api.wheretheiss.at/v1/satellites/25544", fetcher, {
    refreshInterval: 500,
  });

  if (isLoading) return <p>Loading ISS position...</p>;
  if (error) return <p>Failed to load the ISS position</p>;
  if (!coordsFromSWR) return <p>Loading ISS position...</p>;

  const { latitude, longitude } = coordsFromSWR;
  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => {
          console.log("Refresh button clicked");
          mutate();
        }}
      />
    </main>
  );
}
