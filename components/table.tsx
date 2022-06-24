//@ts-nocheck
import React, { useState } from "react";
import { makeData, Person } from "../utils/make_data";

export default function Table() {
  const values: Person[] = makeData(50);
  const [paginatedData, setPaginatedData] = useState(paginate(0, 10, values));

  function sortData(valueToSortBy: string, data: Person[]) {
    return data.sort((a: Person, b: Person) =>
      a[valueToSortBy] < b[valueToSortBy] ? -1 : 1
    );
  }

  //function that creates pages
  //and implements front end pagination

  function paginate(start: number, end: number, data: Person[]) {
    const paginatedData = data.slice(start, end);
    return paginatedData;
  }

  console.log(
    "paginated sorted data",
    paginate(0, 10, sortData("firstName", values))
  );
  const headers: string[] = [
    "first name",
    "last name",
    "age",
    "visits",
    "progress",
    "status",
  ];

  return (
    <div className="bg-white w-[90%] h-[800px] grid grid-row-6 rounded-sm shadow-sm px-2 ">
      <div className=" flex items-center justify-end row-span-1 px-1  ">
        <input
          type="text"
          className=" w-2/5 outline-none hover:ring-2 hover:ring-indigo-200  bg-slate-50 p-2 rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-80"
          placeholder="filter"
        />
      </div>
      <table className=" table-auto border  row-span-4 w-full    ">
        <thead className="bg-gray-100 py-4 h-14">
          <tr className=" px-2 text-left  whitespace-wrap ">
            <th
              className=" p-1 uppercase text-left text-xs font-medium text-gray-600  tracking-wider "
              scope="col"
            >
              <div className="flex items-center w-full justify-between">
                <input type="checkbox" />
              </div>
            </th>
            {headers.map((header: string, index: number) => (
              <th
                className=" p-1 uppercase text-left text-xs font-medium text-gray-600  tracking-wider "
                scope="col"
                key={index}
              >
                <div className="flex items-center w-full justify-between">
                  <p>{header}</p>
                  <span className="ml-1"></span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((value: string | number, index: number) => {
            return (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-0 even:bg-slate-100   h-10"
              >
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="flex items-center w-full justify-between">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div>
                    {" "}
                    <p>{value.firstName}</p>{" "}
                  </div>
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="text-sm text-gray-800 ">
                    <p>{value.lastName} </p>{" "}
                  </div>
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="text-sm text-gray-800 ">
                    {" "}
                    <p>{value.age} </p>{" "}
                  </div>{" "}
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="text-sm text-gray-800 ">
                    <p>{value.visits} </p>
                  </div>
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="text-sm text-gray-800 ">
                    {" "}
                    <p>{value.progress} </p>
                  </div>
                </td>
                <td className=" px-2 text-left  whitespace-wrap ">
                  <div className="text-sm text-gray-800 ">
                    {" "}
                    <p>{value.status} </p>{" "}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full  flex items-center justify-end row-span-1">
        <p>pagination</p>
      </div>
    </div>
  );
}
