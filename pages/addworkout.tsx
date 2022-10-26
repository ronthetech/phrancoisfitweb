import WorkoutForm from "components/WorkoutForm";
import type { NextPage } from "next";
import Head from "next/head";

const AddWorkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Phrancois Fit | Add Workout</title>
        <meta
          name="description"
          content="Phrancois Fit web add a new workout"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-bold">Add a New Workout</h1>
      <div>
        <WorkoutForm />
      </div>
    </>
  );
};

export default AddWorkout;
