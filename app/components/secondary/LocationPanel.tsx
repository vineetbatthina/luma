"use client";
import { LocationType, Visitor } from "@/app/types/secondary";
import { useEffect, useState } from "react";
import { VisitorTable } from "./VisitorTable";

const filterVisitorsAboveAge = (
  arrayToFilter: Visitor[],
  limit: number
): number => {
  const valuesUnderLimit: Visitor[] = [];
  arrayToFilter.forEach((visitor) => {
    if (visitor.age <= limit) {
      valuesUnderLimit.push(visitor);
    }
  });
  valuesUnderLimit.forEach((visitor) => {
    const index = arrayToFilter.findIndex((v) => v.name === visitor.name);
    arrayToFilter.splice(index, 1);
  });

  return arrayToFilter.length;
};
const filterVisitorsBelowAge = (
  arrayToFilter: Visitor[],
  limit: number
): number => {
  const valuesOverLimit: Visitor[] = [];
  arrayToFilter.forEach((visitor) => {
    if (visitor.age > limit) {
      valuesOverLimit.push(visitor);
    }
  });
  valuesOverLimit.forEach((visitor) => {
    const index = arrayToFilter.findIndex((v) => v.name === visitor.name);
    arrayToFilter.splice(index, 1);
  });

  return arrayToFilter.length;
};

const ageLimit = 25;

export const LocationPanel = ({
  name,
  description,
  listOfAllVisitors,
}: LocationType) => {
  const [visitorsBelowAge, setVisitorsBelowAge] = useState(0);
  const [visitorsAboveAge, setVisitorsAboveAge] = useState(0);

  useEffect(() => {
    if (listOfAllVisitors) {
      setVisitorsBelowAge(filterVisitorsBelowAge(listOfAllVisitors, ageLimit));
      setVisitorsAboveAge(filterVisitorsAboveAge(listOfAllVisitors, ageLimit));
    }
  });

  return (
    <div className="w-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex items-center w-full pt-8 p-8">
      <div className="w-90">
        <div className="h-40 w-40">
          <img
            className="rounded-t-lg aspect-square"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
        <div className="py-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <p>
          Visitors under or at {ageLimit}: {visitorsBelowAge}
        </p>
        <p>
          Visitors over {ageLimit}: {visitorsAboveAge}
        </p>
      </div>
      <div className="w-full">
        <VisitorTable listOfAllVisitors={listOfAllVisitors} />
      </div>
    </div>
  );
};
