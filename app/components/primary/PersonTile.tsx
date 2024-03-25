/* eslint-disable @next/next/no-img-element */

interface TileProps {
  name: string;
  address: string;
  phone?: string;
}

export const PersonTile = ({ name, address, phone }: TileProps) => {
  return (
    <div className="w-60 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  pt-8">
      <div className="h-40 w-40">
        <img
          className="rounded-t-lg aspect-square"
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}{" "}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {address}
        </p>
        <div className="text-lg mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {phone}
        </div>
      </div>
    </div>
  );
};
