import React from "react";
import { Person } from "../utils/make_data";

type InputProps = {
  number?: boolean;
  setQuery: Function;
  results?: string[] | number[];
  placeholder?: string;
  filterData: Function;
  setFilteredData?: Function;
  value: string | number;
  data: Person[];
  query: string | number;
};

export default function Filters({
  number,
  setQuery,
  placeholder,
  filterData,
  data,
  query,
  value,
}: InputProps) {
  if (number) {
    return (
      <input
        type="number"
        placeholder={placeholder}
        className=" w-full outline-none hover:ring-2 hover:ring-indigo-200  bg-slate-50 p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-80"
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  console.log(filterData(data, value, query));

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className=" w-full outline-none hover:ring-2 hover:ring-indigo-200  bg-slate-50 p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-80"
      />
      {/*menu with search options*/}
    </div>
  );
}
