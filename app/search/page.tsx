"use client";

import { notFound, useRouter } from "next/navigation";
import React from "react";
import { results } from "../../data/Results";

type Props = {
  searchParams: SearchParams;
};
type SearchParams = {
  url: URL;
  ss: string;
  checkin: string;
  checkout: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  title: string;
  location: string;
};
async function SearchPage({ searchParams }: Props) {
  const checkinDate: Date = new Date(searchParams.checkin);
  const checkoutDate: Date = new Date(searchParams.checkout);

  // Calculate the number of nights (as shown in the previous example)
  const nights: number = Math.ceil(
    (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (!searchParams.url) return notFound();

  if (!results) return <div>No Results...</div>;
  
  
  return (
   
    <section>
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>
      <h2 className="pb-3">
        Dates of Trip
        <span className="italic ml-2">
          {searchParams.checkin} to {searchParams.checkout}
        </span>
      </h2>
      <hr className="mb-5" />
      <h3 className="font-semibold text-xl">
        location(in progress) : {results.length} properties found
      </h3>
      <div className="space-y-2 mt-5">
        {results.map((result, i) => (
          <div
            key={i}
            className="flex space-y-2 justify-between space-x-4 p-5 border rounded-xl"
          >
            <img
              src={result.url}
              alt="image of property"
              className="h-44 w-44 rounded-xl"
            />
            <div className=" grid flex-1 ">
              <p className=" font-semibold text-blue-500 hover:text-blue-600 hover:underline">
                {result.title}
              </p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet dicta,{" "}
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-start justify-end space-x-2 text-right">
                <div>
                  <p className="font-bold">{result.rating_word}</p>
                  <p className="text-xs">{result.rating_count}</p>
                </div>
                <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rended-lg flex-shrink-0">
                  {result.rating || "N/A"}
                </p>
              </div>

              <div className="text-right">
                <p>{`${nights} nights, ${searchParams.group_adults} adults, ${searchParams.group_children} children,`}</p>
                <p className="font-bold text-2xl">{result.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    
  );
}

export default SearchPage;
