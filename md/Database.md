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
