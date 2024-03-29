import { PencilIcon } from "lib";
import { Card } from "components";
import ReviweCard from "./ReviweCard";

const Reviwes = () => {
  return (
    <Card className="my-4 pb-1 rounded-sm w-full relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">Reviwes</p>
        <PencilIcon className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer" />
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>
      <ReviweCard />
      <ReviweCard />
      <ReviweCard />
    </Card>
  );
};
export default Reviwes;
