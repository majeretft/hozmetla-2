const slugify = require("slugify");

function createSchemaCustomization({ actions }) {
  const { createTypes } = actions;
  const typeDefs = `
          type Json implements Node {
            shortNotes: [String]
          }
        `;
  createTypes(typeDefs);
}

async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
    query CreatePages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          base: { eq: "index.json" }
        }
      ) {
        nodes {
          relativeDirectory
          childJson {
            slugRaw
          }
        }
      }
    }
  `);

  data.allFile.nodes.forEach((n) => {
    const slug = slugify(n.childJson.slugRaw, { lower: true });

    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/product.jsx`),
      context: {
        dir: n.relativeDirectory,
        dirPhoto: `${n.relativeDirectory}/photos`,
        dirMdx: `${n.relativeDirectory}/mdx`,
      },
    });
  });
}

module.exports = {
  createSchemaCustomization,
  createPages,
};
