const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const node_port = process.env.NODE_PORT;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

const consoleOutput = () => {
  console.log(``);
  console.log(`Express running on http://localhost:${node_port}`);
  console.log(`GraphQL running on http://localhost:${node_port}/graphql`);
  console.log(``);
};

app.listen(node_port, consoleOutput());
