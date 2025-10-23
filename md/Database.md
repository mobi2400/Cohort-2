# Types of database
### NoSQL
- Schema-less
- Document-oriented
- MongoDB
- Cassandra
### Graph database
- Data represented as graph
- Nodes and edges
- Relationships
- Neo4j
### Vector database
- Store and manage vector embeddings
- Similarity search
- Helps in AI/ML applications
- Pinecone
## SQL
- Structured data
- Relational model
- Tables with rows and columns
- PostgreSQL 
helps in handling complex queries and large datasets efficiently.
## IMPORTANT
### Never update user data directly in SQL database instead use $1,$2,$3... for parameterized queries to prevent SQL injection attacks.
### use const values = [value1, value2, value3]; for parameterized queries.
### Use ORM(Object Relational Mapping) tools like Sequelize, TypeORM, Prisma to interact with SQL databases in a more abstract way.

# Prisma ORM
- Type-safe database client for TypeScript and Node.js
- Supports PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB
- Easy to use and extend
- ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. This technique creates a "virtual object database" that can be used from within the programming language.
ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code
- ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)
- Prisma consists of three main tools:
  1. Prisma Client: An auto-generated and type-safe query builder for Node.js and TypeScript.
  2. Prisma Migrate: A powerful database migration tool that helps you evolve your database schema over time.
  3. Prisma Studio: A visual editor for your database that allows you to view and edit data in a user-friendly interface.
- Prisma schema file (schema.prisma) is the main configuration file where you define your data models, database connection details, and generator configurations.
- Example of a simple Prisma schema defining a User model:
```prisma
model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?
    createdAt DateTime @default(now())
    }
```
## How to start prisma project
  - initialize npm project using `npm init -y`
  - add dependencies using `npm install prisma typescript ts-node @types/node --save-dev`
  - initialize typescript using `npx tsc --init`
  - initialize prisma using `npx prisma init`
  - This will create a prisma folder with schema.prisma file and a .env file.
  - In .env file, set the DATABASE_URL to point to your database.
  - To generate Prisma Client based on your schema, run:
  ```npx prisma generate``` 
  - To create and apply migrations, use:
  ```npx prisma migrate dev --name init```
  - Now you can start defining your data models in the schema.prisma file and use Prisma Client in your TypeScript code to interact with the database.
  - Refer `week-10/prisma` for a sample prisma project.
  
  - `npx prisma generate` is used to generate the Prisma Client based on the current state of your Prisma schema. This command reads your schema.prisma file and creates a type-safe client that you can use in your application to interact with your database.
    - this helps you to use prisma in nodejs or typescript files.
    - `npx prisma migrate dev --name init` is used to create and apply a new migration to your database during development. The `--name init` part allows you to give a descriptive name to the migration, in this case, "init" indicating that it's the initial migration.