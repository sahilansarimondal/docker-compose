<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run docker-compose.

- Node.js (Version: >=20.x)
- PostgreSQL (Version: >=13.x)

don't have those? install follow below steps

click [here](https://nodejs.org/en/download) to get the letest verson on node.

install postgress locally and run from [here](https://www.postgresql.org/download/)

## Development

### Setup

1. Clone the repo

   ```sh
   git clone https://github.com/sahilansarimondal/docker-compose
   ```

   > If you are on Windows, run the following command on `gitbash` with admin privileges

2. Go to the project folder

   ```sh
   cd docker-compose
   ```

## Manual Installation

1. Install packages with npm

   ```sh
   npm install
   ```

2. Set up your `.env` file

   - Duplicate `.env.example` to `.env`

3. Setup Node
   If your Node version does not meet the project's requirements as instructed by the docs, "nvm" (Node Version Manager) allows using Node at the version required by the project:

   ```sh
   nvm use
   ```

   You first might need to install the specific version and then use it:

   ```sh
   nvm install && nvm use
   ```

   You can install nvm from [here](https://github.com/nvm-sh/nvm).

4. Migrate Database

   ```sh
   npx prisma migrate dev
   ```

5. Build the code

   ```sh
   npm run build
   ```

#### Quick start with node

```sh
npm run start
```

## Docker Installation

1. Get docker from [here](https://www.docker.com/get-started/)

2. Create a docker network

   ```sh
   docker network create node-app-network
   ```

3. Run postgres locally using docker

   ```sh
   docker run -d --name postgres-db --network node-app-network -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`

5. Build the image

   ```sh
   docker build -t node-app .
   ```

6. Run the image

   ```sh
   docker run -p 3000:3000 --network node-app-network --name node-app node-app
   ```

## Docker Compose

1. Get docker, docker compose from [here](https://www.docker.com/get-started/)

2. Run the code

   ```sh
   docker compose up
   ```


well done!
