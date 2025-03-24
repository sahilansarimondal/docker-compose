# Getting started

nodejs >= v20

click here to get the letest verson on node: https://nodejs.org/en/download

clone the repo : git clone https://github.com/sahilansarimondal/docker-compose

run : npm install

get postgress locally : https://www.postgresql.org/download/
or use docker to run the postgress ( recomended ) : docker run --name postgress-db -e POSTGRES_PASSWORD=YOURPASSWORD -p 5432:5432 postgres

run : npx prisma migrate dev

run : node dist/index.js

well done!
