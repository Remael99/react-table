//@ts-nocheck
import React from "react";
import { makeData, Person } from "../utils/make_data";

export default function Table() {
  const values: Person[] = makeData(50);

  const headers: string[] = [
    "first name",
    "last name",
    "age",
    "visits",
    "progress",
    "status",
  ];

  return (
    <table className="bg-white table-auto border border-gray-200 w-[90%] rounded-sm    h-[600px]">
      <tr className="bg-gray-600 h-[50px] w-full text-white font-semibold rounded-t-sm">
        <th className="pl-2">
          <div>
            <input type="checkbox" />
          </div>
        </th>
        {headers.map((header: string, index: number) => (
          <th key={index}>
            <p>{header}</p>
          </th>
        ))}
      </tr>

      {values.map((value: string | number, index: number) => {
        return (
          <tr className="border-b border-gray-200 last:border-0">
            <td>
              <div>
                <input type="checkbox" />
              </div>
            </td>
            <td className="p-2" key={index}>
              {value.firstName}
            </td>
            <td key={index}>{value.lastName} </td>
            <td key={index}>{value.age} </td>
            <td key={index}>{value.visits} </td>
            <td key={index}>{value.progress} </td>
            <td key={index}>{value.status} </td>
          </tr>
        );
      })}

      {/* <tr className="bg-gray-600">
        {headers.map((index: number, header: string) => (
          <th key={index}> {header} </th>
        ))}
      </tr>
      <tr>
        {values.map((index: number, value: string | number) => (
          <>
            <td key={index}>{value.firstName}</td>
            <td>{value.lastName}</td>
          </>
        ))}
      </tr> */}
    </table>
  );
}
