# Getting started

nodejs >= v20

click here to get the letest verson on node: https://nodejs.org/en/download

clone the repo : git clone https://github.com/sahilansarimondal/docker-compose

```sh
npm install
```

get postgress locally : https://www.postgresql.org/download/
or use docker to run the postgress ( recomended ) : docker run --name postgress-db -e POSTGRES_PASSWORD=YOURPASSWORD -p 5432:5432 postgres

```sh
npx prisma migrate dev
```

```sh
node dist/index.js
```

well done!
