import { resolvers } from 'GraphQL/Apollo-Server/Resolvers/resolvers';
import { typeDefs } from 'GraphQL/Apollo-Server/TypeDefs/typeDefs';
import { makeExecutableSchema } from 'apollo-server';

export const schema = makeExecutableSchema({ typeDefs, resolvers });
