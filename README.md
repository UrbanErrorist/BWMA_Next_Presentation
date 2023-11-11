# Building Web and Mobile Apps 
### Rishabh Goswami

## Overview

Welcome to the Building Web and Mobile Apps course repo built with Next.js (React and Node) and PostgreSQL as the database. This project is based on the Vercel Prisma Starter Template provided by the Vercel team. The application allows users to interact with a table, view its contents, and add new data. The backend is implemented using Prisma ORM to connect to a PostgreSQL database.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/UrbanErroristBWMA_Next_Presentation
   ```

   Set Up Environment Variables:

2. **Clone the Repository:**
   Locate the example.env file and rename it to .env. Ensure that all necessary credentials are filled in, including the test PostgreSQL server URL.

4. **Run the app:**
   ```bash
   cd BWMA_Next_Presentation
   yarn run dev
   ```

# Project Structure
## Frontend:

The main page is displayed in the browser and includes components like Table and TableEdit.
Look inside the pages/api/user.ts file to explore the backend logic where Prisma ORM connects to the PostgreSQL database to create a new user.
Examine the prisma folder to view the schema.prisma file, defining the database schema.

## Backend:

The backend logic is implemented in the pages/api/user.ts file, utilizing Prisma ORM to interact with the PostgreSQL database.


# Prisma Studio

you can check db with following command

 ```bash
npx prisma studio
```

Feel free to explore the application, add data, and enjoy the seamless integration of Next.js, PostgreSQL, and Azure. If you encounter any issues or have questions, refer to the documentation or reach out me :) 



### Reference:
This project is based on Verce Prisma Starter Template provided by vercel team [https://github.com/vercel/examples/tree/main/storage/postgres-prisma]

