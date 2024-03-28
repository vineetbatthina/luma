"use client";

// All the components being imported
import { Loader, LoadingTile, PersonTile } from "./components";
// The hook to get data from the endpoint
import { useGetDataFromEndpoint } from "./components/hooks/useGetDataFromEndpoint";
// The types
import { PeopleIds, Person } from "./types";

/**
 * endpoints
 * - https://example-one-test.vercel.app/api/people/getAllPeople
 * Returns a list of people id's in the type of PeopleIds
 *
 * - https://example-one-test.vercel.app/api/people/getPerson/{personId}
 * Returns a person in the type of Person
 */

export default function Primary() {
  return (
    <div className="flex gap-4 p-2 flex-col">
      <div className="flex gap-4 p-2">
        <div>
          Loader
          <Loader />
        </div>
        <div>
          Loading Tile
          <LoadingTile />
        </div>
        <div>
          PersonTile
          <PersonTile name={"name"} address="address" phone={"phone number"} />
        </div>
      </div>
      <div className="flex gap-4 p-2 w-full flex-wrap">
        {/*Your code here*/}
      </div>
    </div>
  );
}
