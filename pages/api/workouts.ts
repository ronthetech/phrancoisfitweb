import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function assetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const workouts = await prisma.workout.findMany();
        res.status(200).json(workouts);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching workouts" });
      }
      break;
    case "POST":
      try {
        const newWorkout = await prisma.workout.create({
          data: {
            id: body.id,
            title: body.title,
            reps: body.reps,
            load: body.load,
            minutes: body.minutes,
            createdAt: body.createdAt,
            updatedAt: body.updatedAt,
          },
        });
        return res.status(200).json({ newWorkout, success: true });
      } catch (e) {
        console.error("Request error", e);
        res
          .status(500)
          .json({ error: "Error creating workout", success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedWorkout = await prisma.workout.delete({
          where: {
            id: body.id,
          },
        });
        res.status(200).json(deletedWorkout);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error deleting the workout" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
