import { Visitor } from "@/app/types/secondary";

export const VisitorTable = ({
  listOfAllVisitors,
}: {
  listOfAllVisitors?: Visitor[];
}) => {
  return (
    <div className="overflow-x-auto h-96 w-full border-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              Age{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {listOfAllVisitors?.map((visitor, idx) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={idx}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {visitor.name}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {visitor.age}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
