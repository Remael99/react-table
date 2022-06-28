import React, { useState } from "react";
import { makeData, Person } from "../utils/make_data";
import { TbArrowsDownUp } from "react-icons/tb";
import Filters from "./filter";

type Header = {
  header: string;
  value: string;
};

type Page = {
  page: number;
  pageRange: number[];
};

export default function Table() {
  const values: Person[] = makeData(50);

  const [paginatedData, setPaginatedData] = useState(paginate(0, 10, values));
  const [filteredData, setFilteredData] = useState(paginate(0, 10, values));
  const [query, setQuery] = useState("");

  function sortData(valueToSortBy: string, data: Person[]) {
    return data.sort((a: Person, b: Person) =>
      //@ts-ignore
      a[valueToSortBy] < b[valueToSortBy] ? -1 : 1
    );
  }

  function paginate(start: number, end: number, data: Person[]) {
    const paginatedData = data.slice(start, end);
    return paginatedData;
  }

  const headers: Header[] = [
    { header: "first name", value: "firstName" },
    { header: "last name", value: "lastName" },
    { header: "age", value: "age" },
    { header: "visits", value: "visits" },
    { header: "progress", value: "progress" },
    { header: "status", value: "status" },
  ];

  const handleSort = (value: string, data: Person[]) => {
    const sortedData = sortData(value, paginatedData);

    setPaginatedData(() => [...sortedData]);
  };

  const pages = (): Page[] => {
    const totalPages = Math.floor(values.length / 10);
    //page in mumber 1,2,3,4
    const numberOfPages: number[] = [];

    for (let i = 0; i <= totalPages - 1; i++) {
      numberOfPages.push(i + 1);
    }

    let firstIndex = 0;
    let lastIndex = 10;
    let pageRange = [[firstIndex, lastIndex]];
    for (let i = 0; i <= totalPages - 2; i++) {
      firstIndex = lastIndex + 1;
      lastIndex += 10;
      pageRange.push([firstIndex, lastIndex]);
    }

    const pages = pageRange.map((range: number[], index: number) => {
      return { page: numberOfPages[index], pageRange: range };
    });

    return pages;
  };

  const handleChangePage = (start: number, end: number, values: Person[]) => {
    const newPage = paginate(start, end, values);
    setPaginatedData(() => [...newPage]);
  };

  const filterData = (
    data: Person[],
    key: keyof Person,
    filterBy: string | number
  ) => {
    const filteredData = data.filter((data: Person, index: number) => {
      if (typeof data[key] === "string") {
        //@ts-ignore
        return data[key].toLowerCase().includes(filterBy);
      }
      return data[key] === filterBy;
    });
    return filteredData;
  };

  return (
    <div className=" bg-white w-[90%] h-[fit-content] py-4 grid grid-row-6 rounded-sm shadow-sm px-2 ">
      <div className={` grid grid-cols-4 gap-2  row-span-1   py-4 mb-2 `}>
        <input
          type="text"
          className=" w-full outline-none hover:ring-2 hover:ring-indigo-200  bg-slate-50 p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-80"
          placeholder="search"
        />
        {headers.map((header: Header, index: number) => (
          <Filters
            number={
              header.value === "age" ||
              header.value === "visits" ||
              header.value === "progress"
            }
            setQuery={setQuery}
            key={index}
            placeholder={header.header}
            value={header.value}
            filterData={filterData}
            query={query}
            data={values}
          />
        ))}
      </div>
      <div className=" overflow-y-auto row-span-4 w-full  h-[fit-content]  ">
        <table className=" table-auto border   w-full    ">
          <thead className="bg-gray-100 py-4 h-14 ">
            <tr className=" px-2 text-left  whitespace-wrap ">
              <th
                className=" p-1 uppercase text-left text-xs font-medium text-gray-600  tracking-wider "
                scope="col"
              >
                <div className="flex items-center w-full justify-between">
                  <input type="checkbox" />
                </div>
              </th>
              {headers.map((header: Header, index: number) => (
                <th
                  className=" p-1 uppercase text-left text-xs font-medium text-gray-600  tracking-wider "
                  scope="col"
                  key={index}
                >
                  <div className="flex items-center w-full justify-between">
                    <p>{header.header}</p>
                    <button
                      onClick={() => handleSort(header.value, paginatedData)}
                      className="p-2  hover:bg-slate-200 rounded-full h-full inline-flex items-center justify-center "
                    >
                      <TbArrowsDownUp />
                    </button>
                    <span className="ml-1"></span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((value: Person, index: number) => {
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
      </div>
      <div className="w-full  flex items-center justify-end row-span-1 gap-1  py-2 mt-2">
        {pages().map((page: Page, index: number) => {
          return (
            <div key={page.page} className="w-10 text-white">
              <button
                onClick={() => {
                  //click two bring from 10 -20, click 3 from 21-30 etc etc
                  //
                  handleChangePage(
                    page.pageRange[0],
                    page.pageRange[1],
                    values
                  );
                }}
                className="rounded-md w-full h-10 bg-slate-400 p-3 inline-flex items-center justify-center hover:opacity-40 focus:ring-1 focus:ring-fuchsia-400"
              >
                {page.page}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
