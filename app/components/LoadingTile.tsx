import { Loader } from "./Loader";

export const LoadingTile = () => {
  return (
    <div className="w-60 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  pt-8">
      <Loader />
    </div>
  );
};
