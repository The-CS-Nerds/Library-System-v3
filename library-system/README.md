# Library System v3

A modern library management system built with SvelteKit, TypeScript, and PostgreSQL.

## Prerequisites

- Node.js 22.x or higher
- npm 11.x or higher
- Docker and Docker Compose (for local database)

## Getting Started

### 1. Clone and Install

```sh
git clone https://github.com/The-CS-Nerds/Library-System-v3.git
cd Library-System-v3/library-system
npm install
```

The `npm install` command will automatically create a `.env` file from `.env.example` if it doesn't exist.

### 2. Start the Database

Start the PostgreSQL database using Docker:

```sh
npm run db:start
```

This will start a PostgreSQL database on `localhost:5432` with the credentials defined in `docker-compose.yml`.

### 3. Run the Development Server

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The application will be available at `http://localhost:5173`.

## Configuration

The `.env` file contains the database connection string and other environment variables. 
By default, it uses:

```
DATABASE_URL="postgres://root:mysecretpassword@localhost:5432/local"
```

You can modify this file to match your local setup if needed.

## Database Scripts

- `npm run db:start` - Start the PostgreSQL database with Docker Compose
- `npm run db:push` - Push schema changes to the database
- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Drizzle Studio for database management

## Other Commands

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
