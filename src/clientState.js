import { NOTE_FRAGMENT } from "./fragments";

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
    note: (_, { id }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: "Note",
        id
      })
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      return note;
    }
  },
  Mutation: {}
};