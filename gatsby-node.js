const path = require('path');
const locales = require('./config/i18n');
const { findKey, removeTrailingSlash, localizedSlug } = require('./src/utils/gatsby-node-helpers');
const PERSON_PER_PAGE = 6;

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`;
    return createPage({
      ...page,
      path: removeTrailingSlash(localizedPath),
      context: {
        ...page.context,
        locale: lang,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const name = path.basename(node.fileAbsolutePath, '.md');
    const defaultKey = findKey(locales, o => o.default === true);
    const isDefault = name.split('.')[1] === defaultKey;
    const lang = isDefault ? defaultKey : name.split('.')[1];
    const slugFileName = name.split('.')[0];
    createNodeField({ node, name: 'slug', value: slugFileName });
    createNodeField({ node, name: 'locale', value: lang });
    createNodeField({ node, name: 'isDefault', value: isDefault });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const personTemplate = path.resolve('./src/templates/person.js');
  const personsListTemplate = path.resolve('./src/templates/persons-list.js');
  const pageTemplate = path.resolve('./src/templates/page.js');
  const result = await graphql(`
    {
      files: allMarkdownRemark(
        sort: { fields: [frontmatter___name], order: DESC }
      ) {
        edges {
          node {
            fields {
              locale
              isDefault
              slug
            }
            frontmatter {
              name
              page
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
    return;
  }
  const contentMarkdown = result.data.files.edges;
  let postsTotal = 0;
  contentMarkdown.forEach(({ node: file }) => {
    const slug = file.fields.slug;
    const name = file.frontmatter.name;
    const locale = file.fields.locale;
    const isDefault = file.fields.isDefault;
    const isPage = file.frontmatter.page;
    const template = isPage ? pageTemplate : personTemplate;
    isPage ? 0 : postsTotal++;
    createPage({
      path: localizedSlug({ isDefault, locale, slug, isPage }),
      component: template,
      context: { locale, name }
    });
  });
  // Creating Persons List and its Pagination
  const langs = Object.keys(locales).length;
  const numPages = Math.ceil(postsTotal / langs / PERSON_PER_PAGE);
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? '/data/person'
      : `${locales[lang].path}/data/person`;
    return Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? localizedPath : `${localizedPath}/page/${index + 1}`,
        component: personsListTemplate,
        context: {
          limit: PERSON_PER_PAGE,
          skip: index * PERSON_PER_PAGE,
          numPages,
          currentPage: index + 1,
          locale: lang,
          dateFormat: locales[lang].dateFormat,
        },
      });
    });
  });
};
