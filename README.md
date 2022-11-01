# genesis

A dockerised create-react-app that stores data express server with GraphQL to connect to a MongoDB database. The application allows the user to add clients, projects and view sample_airbnb data from mongo atlas.

### Install

1. Install Docker for your operating system.
2. Install the [Docker Compose](https://docs.docker.com/compose/install/) tool.
3. Create a mongoDB Atlas account.
4. Create a database on a mongoDB Atlas cluster with provided mongoDB sample_data.
6. Copy and paste the mongoDB connection string into a .env file in server 
6. Run docker-compose up

## ENV example

```
NODE_ENV = 'development' #Toggles if we show GraphiQL for dev or production#Port for the client
NODE_PORT = 5002 #Port for the server
MONGO_URI_ATLAS = 'mongodb+srv://<mongodbuser>:<mongodbpassword>@genesis.xsdlwrf.mongodb.net/sample_airbnb?retryWrites=true&w=majority' #Remote URI
MONGO_URI_LOCAL = 'mongodb://localhost:27017/sample_airbnb' #Local URI
```

## Usage

```
docker-compose up
```

Alternatively you could cd into 'client' and 'server' then run the below to run the projects as normal outside of docker.

```
yarn && yarn start. 
```


To run the applications outside of docker.

### Features

- [x] Dockerised
- [x] Frontend built with create-react-app, graphql, mongoose, apollo
- [x] Backend built with express, graphql, mongodb

### Stack

- ![Docker](https://img.shields.io/badge/-Docker-%23232F3E?logo=Docker)
- ![Express](https://img.shields.io/badge/-Express-%23232F3E?logo=Express)
- ![Reactv18](https://img.shields.io/badge/-React%20v18-%23232F3E?logo=React)
- ![Express](https://img.shields.io/badge/-Express-%23232F3E?logo=Express)
- ![MongoDB](https://img.shields.io/badge/-MongoDB-%23232F3E?logo=MongoDB)
- ![GraphQL](https://img.shields.io/badge/-GraphQL-%23232F3E?logo=GraphQL)
