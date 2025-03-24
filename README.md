<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run docker-compose.

- Node.js (Version: >=20.x)
- PostgreSQL (Version: >=13.x)

don't have those? install follow below steps

click here to get the letest verson on node: https://nodejs.org/en/download

run postgress locally : https://www.postgresql.org/download/

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

3. Install packages with npm

   ```sh
   npm install
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`

5. Setup Node
   If your Node version does not meet the project's requirements as instructed by the docs, "nvm" (Node Version Manager) allows using Node at the version required by the project:

   ```sh
   nvm use
   ```

   You first might need to install the specific version and then use it:

   ```sh
   nvm install && nvm use
   ```

   You can install nvm from [here](https://github.com/nvm-sh/nvm).

6. Migrate Database

   ```sh
   npx prisma migrate dev
   ```

7. Build the code

   ```sh
   npm run build
   ```

#### Quick start with node

```sh
npm run start
```

well done!
