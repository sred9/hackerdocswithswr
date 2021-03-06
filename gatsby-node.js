const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const programsTemplate = path.resolve('./src/templates/programs.js');
  const hackersTemplate = path.resolve('./src/templates/hackers.js');
  const htmlTemplate = path.resolve('./src/templates/html.js');
  const bootstrapTemplate = path.resolve('./src/templates/bootstrap.js');
  const materialTemplate = path.resolve('./src/templates/material.js');
  const changelogTemplate = path.resolve('./src/templates/changelog.js');
  const glossaryTemplate = path.resolve('./src/templates/glossary.js');
  const accessibilityTemplate = path.resolve('./src/templates/accessibility.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              path
			  imagepath
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template;
      if (node.frontmatter.path.includes("/programs")) {
        template = programsTemplate;
      } else if (node.frontmatter.path.includes("/hackers")) {
        template = hackersTemplate;
	  } else if (node.frontmatter.path.includes("/html")) {
        template = htmlTemplate;
	  } else if (node.frontmatter.path.includes("/bootstrap")) {
        template = bootstrapTemplate;
      } else if (node.frontmatter.path.includes("/changelog")) {
        template = changelogTemplate;
      } else if (node.frontmatter.path.includes("/glossary")) {
        template = glossaryTemplate;
      } else if (node.frontmatter.path.includes("/accessibility")) {
        template = accessibilityTemplate;
      }
	  else if (node.frontmatter.path.includes("/material")) {
        template = materialTemplate;
      }

      createPage({
        path: node.frontmatter.path,
        component: template,
      });
    });
  });
};
