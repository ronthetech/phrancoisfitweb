import WorkoutDetails from "components/WorkoutDetails";
import prisma from "lib/prisma";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const workouts = await prisma.workout.findMany();

  return { props: { workouts: JSON.parse(JSON.stringify(workouts)) } };
};

export default function Workouts(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="">
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Workouts</h1>
      <div>
        {props.workouts.map(
          (workout: {
            id: number;
            title: string;
            reps: number;
            load: number;
            minutes: number;
            createdAt: Date;
          }) => (
            <WorkoutDetails
              key={workout.id}
              id={workout.id}
              title={workout.title}
              reps={workout.reps}
              load={workout.load}
              minutes={workout.minutes}
              createdAt={workout.createdAt}
            />
          )
        )}
      </div>
    </div>
  );
}
