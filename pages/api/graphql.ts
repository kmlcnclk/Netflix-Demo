const { PubSub } = require("apollo-server");
const { schema } = require("src/schema");
const { NextApiRequest, NextApiResponse } = require("next");
const { ApolloServer } = require("apollo-server-micro");
const { connectDatabase } = require("Server/DB/connectDatabase");

connectDatabase();

const pubsub = new PubSub();

const apolloServer = new ApolloServer({
  schema,
  context: ({ req: NextApiRequest, res: NextApiResponse }) => ({
    req: NextApiRequest,
    res: NextApiResponse,
    pubsub,
  }),
  subscriptions: {
    path: "/api/subscriptions",
  },
  playground: true,
  cors: true,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
