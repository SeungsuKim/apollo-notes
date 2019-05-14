export const defaults = {
  notes: [
    {
      __typename: "Note",
      id: 1,
      title: "title",
      content: "content"
    }
  ]
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
    createNote(title: String!, content: String!): Note
    editNote(id: Int!, title: String!, content: String!): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];

export const resolvers = {
  Query: {
    note: (_, { id }, { getCacheKey }) => {
      const noteId = getCacheKey({ __typename: "Note", id });
      console.log(noteId);
      return null;
    }
  },
  Mutation: {}
};