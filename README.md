

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Hospital-API with CRUD operations for operating with medicos table and especialidades table

Nest + MySQL + Docker

## Installation

```bash
$ npm install
```

## Running the app
TypeORm is configured to run with docker, but by changing the host to 'localhost' in the app.module.ts file, you can run by the following:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker
```bash
docker-compose up
```

## Seeding the database
If the database is not seeded on start, go to localhost:3000/seed and the especialidade table will be populated

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
