# Prisma GraphQL
Using Prisma with PostgreSQL and Apollo GraphQL on Fastify server

# Stack
- [Prisma 2](https://www.prisma.io/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Fastify](http://fastify.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Prerequisite
- Postgres
- Node

## Getting start
1. Replace `DATABASE_URL` in `.env` with your URL

2. Generate Prisma type
```bash
npx prisma migrate dev --name init --preview-feature
```

3. For Development use:
```bash
yarn dev
```

## Production
1. Compile to JavaScript
```bash
yarn tsc
```

2. Run Node server
```bash
node dist/index.js
```
