"use client";

import { useEffect, useState } from "react";
// All the components being imported
import { Loader, LoadingTile, PersonTile } from "./components";
// The hook to get data from the endpoint
import { useGetDataFromEndpoint } from "./components/hooks/useGetDataFromEndpoint";
// The types
import { PeopleIds, Person } from "./types";
import { PersonData } from "./components/PersonData";

/**
 * endpoints
 * - https://example-one-test.vercel.app/api/people/getAllPeople
 * Returns a list of people id's in the type of PeopleIds
 *
 * - https://example-one-test.vercel.app/api/people/getPerson/{personId}
 * Returns a person in the type of Person
 */

export default function Primary() {
  const url = "https://example-one-test.vercel.app/api/people/getAllPeople";
  const {
    data: peopleIds,
    loading,
    error,
  } = useGetDataFromEndpoint<PeopleIds>({ url });
  const [peopleData, setPeopleData] = useState([]);
  return (
    <div className="flex gap-4 p-2 flex-col">
      <div className="flex gap-4 p-2">
        <div></div>
      </div>
      <div className="flex gap-4 p-2 w-full flex-wrap">
        {peopleIds?.map((peopleId, idx) => (
          <PersonData personId={peopleId} key={idx} />
        ))}
      </div>
    </div>
  );
}
