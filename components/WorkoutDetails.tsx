import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

interface WorkoutDetailsProps {
  id: number;
  title: string;
  reps: number | "";
  load: number | "";
  minutes: number | "";
  createdAt: Date;
}

const WorkoutDetails = ({
  id,
  title,
  reps,
  load,
  minutes,
  createdAt,
}: WorkoutDetailsProps) => {
  const router = useRouter();

  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(id);
    const body = { id };
    try {
      const req = await fetch(`/api/workouts`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (req.status !== 200) {
        console.log("something went wrong!");
        //set an error banner here
      } else {
        router.reload();
        console.log("workout deleted successfully !!!");
        //set a success banner here
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-300 rounded-lg text-left shadow-lg transition-all sm:my-8 my-6 sm:w-full sm:max-w-xl p-6 mx-auto">
      <div>
        <h2 className="text-xl font-medium leading-6 text-gray-900">{title}</h2>
      </div>
      <div>
        <div>
          {reps ? (
            <p className="mt-1 text-lg text-gray-600">
              <strong>Reps: {reps}</strong>
            </p>
          ) : (
            <p></p>
          )}
          <p className="mt-1 text-lg text-gray-600">
            <strong>Load (lbs): {load}</strong>
          </p>
          {minutes ? (
            <p className="mt-1 text-lg text-gray-600">
              <strong>Length (mins): {minutes}</strong>
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <p className="mt-1 text-lg text-gray-700 font-bold">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-400 disabled:text-gray-300"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
