export const defaults = {
  notes: []
};
export const resolvers = {
  Query: {
    notes:
  }
};
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!): Note
  }
  type Mutation {
    createNote(title: String!, content: String!)
    editNote(id: Int!, title: String!, content: String!)
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];