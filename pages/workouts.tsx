import WorkoutDetails from "components/WorkoutDetails";
import type { NextPage } from "next";
import Head from "next/head";

const workouts = [
  { title: "Pushups", reps: 20, load: 0, minutes: 0 },
  { title: "Bench Press", reps: 20, load: 40, minutes: 0 },
  { title: "Running", reps: 0, load: 0, minutes: 20 },
];

const Workouts: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Workouts</h1>
      <div>
        {workouts.map((workout) => (
          <WorkoutDetails
            key={workout.title}
            title={workout.title}
            reps={workout.reps}
            load={workout.load}
            minutes={workout.minutes}
          />
        ))}
      </div>
    </div>
  );
};

export default Workouts;