const path = require('path');
const locales = require('./config/i18n');
const {
  findKey,
  removeTrailingSlash,
  localizedSlug,
} = require('./src/utils/gatsby-node-helpers');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`;
    if (localizedPath.includes('/404.')) {
      page.matchPath = locales[lang].default
        ? `/*`
        : `/${locales[lang].path}/*`;
    }
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
  const personTemplate = path.resolve('./src/templates/PersonFullView.js');
  const pageTemplate = path.resolve('./src/templates/page.js');
  const result = await graphql(`
    {
      files: allMarkdownRemark(
        sort: { fields: [frontmatter___name], order: DESC }
      ) {
        edges {
          node {
            fileAbsolutePath
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
  const contentMarkdown = result.data.files.edges.filter(
    ({ node }) => !node.fileAbsolutePath.includes('data/rawdata/')
  );
  contentMarkdown.forEach(({ node: file }) => {
    const slug = file.fields.slug;
    const name = file.frontmatter.name;
    const locale = file.fields.locale;
    const isDefault = file.fields.isDefault;
    const isPage = file.frontmatter.page;
    const template = isPage ? pageTemplate : personTemplate;
    createPage({
      path: localizedSlug({ isDefault, locale, slug, isPage }),
      component: template,
      context: { locale, name },
    });
  });
};
