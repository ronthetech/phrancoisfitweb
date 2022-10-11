import prisma from "lib/prisma";

interface Workout {
  title: string;
  reps: number | "";
  load: number | "";
  minutes: number | "";
}

export default async function assetHandler(req, res) {
  const { method } = req;

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
            id: req.body.id,
            title: req.body.title,
            reps: req.body.reps,
            load: req.body.load,
            minutes: req.body.minutes,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
          },
        });
        return res.status(200).json(newWorkout, { success: true });
      } catch (e) {
        console.error("Request error", e);
        res
          .status(500)
          .json({ error: "Error creating workout", success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
