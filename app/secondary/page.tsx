"use client";
import { Loader, LocationPanel } from "../components";
import { useGetDataFromEndpoint } from "../components/hooks/useGetDataFromEndpoint";
import { LocationType } from "../types/secondary";

export default function Secondary() {
  const { loading, data, error } = useGetDataFromEndpoint<LocationType>({
    url: "https://example-one-test.vercel.app/api/location",
  });
  return (
    <div className="flex gap-4 p-2 flex-col">
      {loading ? (
        <Loader />
      ) : data ? (
        <LocationPanel
          name={data.name}
          description={data.description}
          listOfAllVisitors={data.listOfAllVisitors}
        />
      ) : (
        error && <div>Error: {error}</div>
      )}
    </div>
  );
}
