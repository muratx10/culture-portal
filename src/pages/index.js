import React from 'react';
import { graphql } from 'gatsby';
import translateThis from '../components/useTranslations';
import PersonPreview from '../components/PersonPreview';
import Head from '../components/Head';

const MILLISECONDS_IN_DAY = 86400000;

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const { home, mainPageContent } = translateThis();
  const personList = allMarkdownRemark.edges;
  const randomIndex =
    Math.floor(Date.now() / MILLISECONDS_IN_DAY) % personList.length;
  const randomPerson = personList[randomIndex].node;
  return (
    <div className="mainpage">
      <Head title="Home" />
      <h1>{home}!</h1>
      <p>{mainPageContent}</p>
      <h2>Author of a day</h2>
      <hr />
      <section>
        <PersonPreview
          slug={`/data/person/${randomPerson.fields.slug}`}
          yearsoflife={randomPerson.frontmatter.yearsoflife}
          name={randomPerson.frontmatter.name}
          description={randomPerson.frontmatter.description}
          src={randomPerson.frontmatter.src}
        />
      </section>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($locale: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(data/person)/.*.md$/" }
      }
      sort: { fields: [frontmatter___name], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            name
            description
            src
            yearsoflife
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
