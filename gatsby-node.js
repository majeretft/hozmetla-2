exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
          type Json implements Node {
            shortNotes: [String]
          }
        `;
  createTypes(typeDefs);
};
