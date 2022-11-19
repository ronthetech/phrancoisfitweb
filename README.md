# Phrancois Fit

**Link to project:** [Phrancois Fit](https://phrancoisfit.vercel.app/)

![Phrancois Fit](https://ronthetech.github.io/image-repo/home_page_logged_out.png)

## How It's Made:

**Tech Used:** JavaScript, TypeScript, Node.js, React, Next.js, TailwindCSS, MySQL, Prisma

I built this application using TypeScript rather than vanilla JavaScript because I believe type safety is an important feature to ensure that your code doesn't perform invalid operations. I chose to use Next.js as the framework for this application because it allows me to route users to the different pages on the web app by using file-based routing. The ease of simply creating new pages and routes based on where I place my files really improved DX and made the process of adding pages a simple one. Prisma is a dynamic ORM that allowed me to make queries that create, or delete exercise records in my MySQL database and perform the intended operations based on calls to `/api/workouts` endpoint.
TailwindCSS is a really powerful tool for making the design of your applications more responsive and mobile-friendly while still maintaining a great appearance and performance across platforms.

## Features

Displays a list of custom created workouts, with details like the number of reps to perform, how heavy the load is if you are lifting weights, or the duration in minutes for how long the exercise should be done.

![Phrancois Fit Workouts Page](https://ronthetech.github.io/image-repo/workouts_page_logged_out.png)

You can plan out your workouts by saving individual exercises. Features a reminder for how long ago the particular exercise was created and the option to delete the exercise after you have completed it.

![Phrancois Fit Add Workout Form](https://ronthetech.github.io/image-repo/adding_workout_logged_out.png)

## Auth

Users can login with Google credentials or sign up for an account.

![Phrancois Fit Logged In](https://ronthetech.github.io/image-repo/workouts_page_logged_in.png)
