import { useSession } from "next-auth/react";

interface WorkoutDetailsProps {
  title: string;
  reps: number | "";
  load: number | "";
  minutes: number | "";
}

const WorkoutDetails = ({
  title,
  reps,
  load,
  minutes,
}: WorkoutDetailsProps) => {
  const { data: session } = useSession();
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
        {/* <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p> */}
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            disabled={!session}
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-400 disabled:text-gray-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
